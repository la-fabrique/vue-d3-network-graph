import { computed, ref, type Ref } from "vue";

type TransformationMatrix = {
  /**
   * Scale  vector x
   */
  Sx: number;
  /**
   * Skewing  vector x
   */
  Qx: number;
  /**
   * Skewing  vector y
   */
  Qy: number;
  /**
   * Scale vector y
   */
  Sy: number;
  /**
   * Translation vector x
   */
  Tx: number;
  /**
   * Translation vector y
   */
  Ty: number;
};

export const useCanvas = (rect: Ref<{ top: number; left: number }>) => {
  const tm = ref<TransformationMatrix>({
    Sx: 1,
    Qx: 0,
    Qy: 0,
    Sy: 1,
    Tx: 0,
    Ty: 0,
  });

  const transform = computed(
    () =>
      `matrix(${tm.value.Sx},${tm.value.Qx},${tm.value.Qy},${tm.value.Sy},${tm.value.Tx},${tm.value.Ty})`
  );

  // Pointer origin for pan
  const pointerOrigin = { x: 0, y: 0 };

  const canZoom = (nextScale: number) => nextScale >= 0.5 && nextScale <= 4;
  const canPan = () => pointerOrigin.x !== 0 && pointerOrigin.y !== 0;

  /**
   * With absolute position and parent top/left. Get relative position to parent
   * @param x Point x
   * @param y Point y
   * @param parentTop Parent top
   * @param parentLeft Parent left
   */
  const getRelativePosition = (
    x: number,
    y: number,
    parentTop: number,
    parentLeft: number
  ) => ({ x: x - parentLeft, y: y - parentTop });

  const zoom = (clientX: number, clientY: number, scaleDelta: number) => {
    const nextScale = tm.value.Sx + scaleDelta;
    if (!canZoom(nextScale)) return;

    const point = getRelativePosition(
      clientX,
      clientY,
      rect.value.top,
      rect.value.left
    );

    tm.value.Tx = (nextScale / tm.value.Sx) * (tm.value.Tx - point.x) + point.x;
    tm.value.Ty = (nextScale / tm.value.Sx) * (tm.value.Ty - point.y) + point.y;
    tm.value.Sx = nextScale;
    tm.value.Sy = nextScale;
  };

  const panMove = (clientX: number, clientY: number) => {
    if (!canPan()) return;

    // Get delta
    const deltaX = clientX - pointerOrigin.x;
    const delatY = clientY - pointerOrigin.y;

    // Update matrix
    tm.value.Tx += deltaX;
    tm.value.Ty += delatY;

    // Update origin for next move
    pointerOrigin.x = clientX;
    pointerOrigin.y = clientY;
  };

  const panStart = (clientX: number, clientY: number) => {
    pointerOrigin.x = clientX;
    pointerOrigin.y = clientY;
  };

  const panEnd = () => {
    pointerOrigin.x = 0;
    pointerOrigin.y = 0;
  };

  return { transform, zoom, panMove, panStart, panEnd };
};
