import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// instale o 'vite-plugin-pages' para gerar rotas automaticamente com base na estrutura  de arquivos. Os arquivos, por padrão, ficam no diretório 'src/pages'. Mas você pode configurar o diretório de páginas com a opção 'pagesDir' do plugin.
import Pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Pages(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
