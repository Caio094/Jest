# Projeto de Testes com Jest

Este projeto é um exemplo de configuração e uso do Jest, um framework de testes para JavaScript. O objetivo é demonstrar como configurar e escrever testes básicos para um projeto

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

jest-testing-project/ ├── src/ │ ├── calculadora.js │ └── ePalindromo.js ├── tests/ │ ├── calculadora.test.js │ └── ePalindromo.test.js ├── package.json └── jest.config.js (opcional) 

- **`src/`**: Contém os arquivos de código-fonte.
  - `calculadora.js`: Implementação da calculadora.
  - `ePalindromo.js`: Funções relacionadas a palíndromos.
  
- **`tests/`**: Contém os arquivos de teste.
  - `calculadora.test.js`: Testes para a calculadora.
  - `ePalindromo.test.js`: Testes para funções relacionadas a palíndromos.

- **`package.json`**: Arquivo de configuração do npm que lista as dependências do projeto e scripts.
- **`jest.config.js`** (opcional): Configuração personalizada do Jest.

## Configuração do Ambiente

1. **Clone o Repositório**

   Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/Caio094/Jest.git


2. **Instale as Dependências**

   cd jest-testing-project
   npm install


3. **Execute os Testes**

   npm test


