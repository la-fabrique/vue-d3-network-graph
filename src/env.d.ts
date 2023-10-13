/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_REPO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
