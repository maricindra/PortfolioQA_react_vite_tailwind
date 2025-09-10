import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import React from 'react';

import Fotoperfil from "/public/foto-perfil.png"
import Teste1 from "/public/teste1.jpg"
import Teste2 from "/public/teste2.jpg"
import Teste3 from "/public/teste3.jpg"

export default function Portfolio() {
  return (
    <div className="bg-gradient-animate animate-gradient-move min-h-screen text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-center space-x-8 py-6 text-gray-300">
        <a href="#projetos" className="hover:text-white">Projetos</a>
        <a href="#sobre" className="hover:text-white">Sobre</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#contatos" className="hover:text-white">Contatos</a>
      </nav>

      {/* Header */}
      <section className="flex flex-col items-center py-10 text-center">
        <motion.img
          src={Fotoperfil}
          alt="Foto Perfil"
          className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <h1 className="text-2xl mt-4 font-bold">Marina Cindra</h1>
        <p className="text-lg text-purple-300">Quality Assurance | Testes de Automação | TI </p>
        <p className="text-sm text-gray-400">MBA em Gestão de Projetos de TI</p>
        <p className="text-sm text-gray-400">Engenheira da Computação</p>

        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/maricindra" target="_blank">
            <Button className="bg-purple-600 hover:bg-purple-800">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/marina-cindra13" target="_blank">
            <Button className="bg-blue-600 hover:bg-blue-800">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </a>
          <a href="mailto:marinacindra13@gmail.com" target="_blank">
            <Button className="bg-gray-900 hover:bg-gray-700">
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="px-8 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Sobre</h2>
        <p className="text-gray-300">
          Profissional com rápida adaptabilidade, personalidade autodidata e forte capacidade de absorver novos conhecimentos. 
          Tenho interesse em atuar na área de Quality Assurance, contribuindo com testes manuais e automação para garantir 
          a qualidade de produtos digitais. Experiência com metodologias ágeis (Scrum, Kanban), lógica de programação 
          (Python, JavaScript, C++) e ferramentas como Jira, Trello e Notion.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Testes Manuais",
            "Automação de Testes",
            "Postman",
            "Cypress",
            "Selenium",
            "CI/CD",
            "Python",
            "JavaScript",
            "C++",
            "Docker",
            "Node.js",
            "MongoDB",
            "SQL",
            "Suporte a Sistemas",
            "C++",
            "Linux",
            "Scrum & Kanban",
            "Robot framework"
          ].map((skill, idx) => (
            <Card key={idx} className="bg-gray-900 border border-gray-700">
              <CardContent className="p-4 text-center">{skill}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="px-8 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Projetos</h2>

        <div className="flex flex-col space-y-10">
        <Card className="bg-purple-900/40 border border-purple-700">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold">1. Criação de API + Teste de API CRUD</h3>
            <p className="text-gray-300">
            Projeto demonstra a criação completa de uma API RESTful para um sistema de cadastro de livros. O desenvolvimento abrange o ciclo de vida completo dos dados (CRUD), além disso, inclui uma robusta validação de qualidade através de testes automatizados usando o Cypress.
            <br></br>
            <a href ="https://github.com/maricindra/Api-Restful-de-Livros-testes.git" ><strong>Clique para acessar o codigo </strong></a> <br />
            
            </p>
            
          <div className="flex flex-col   md:flex-row   gap-5" >
          <motion.img
          src={Teste1}
          alt="Foto Perfil"
          className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }} 
        />
                <motion.img
          src={Teste2}
          alt="Foto Perfil"
          className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}/>

          <motion.img
          src={Teste3}
          alt="Foto Perfil"
          className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}

            /></div>

            <p className="text-sm text-purple-200">

      
            <strong>Ferramentas de Construção da API:</strong> Node.js, Express, Cors, MongoDB, Mongoose, GitBash <br />
            <strong>Ferramentas para Teste:</strong> Cypress, GitBash, cypress-plugin-api <br></br>
            <strong>Tipo de teste:</strong> Teste de API, Teste Funcional, Metodo Caixa preta.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Objetivo:</strong> Oferecer agilidade e confiabilidade, detectando falhas antes da entrega ao cliente.
            </p>
          </CardContent>
        </Card>



        <Card className="bg-purple-900/40 border border-purple-700">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold">2. Teste de interface Automatizada Robot Framework</h3>
            <p className="text-gray-300">
            Simular o comportamento de um usuário real no site da Americanas, validando funcionalidades essenciais como login e busca de produtos.<br></br>
        
            <a href ="https://github.com/maricindra/Robot-Framework.git" ><strong>Clique para acessar o codigo </strong></a> <br /> 
            </p>


            <div></div>
            <p className="text-sm text-purple-200"> 
            <strong>Ferramentas de Teste:</strong> Selenium, Robot Framework <br />
            <strong>Tipo de teste:</strong>  Teste de Interface, Teste Funcional, Metodo Caixa preta.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Objetivo:</strong> Garantir a funcionalidade essencial do site, como navegação, busca de produtos e login, através de testes automatizados. Isso ajuda a identificar regressões rapidamente e a manter a qualidade da experiência do usuário.
            </p>
          </CardContent>
        </Card>

      </div>
      </section>

      {/* Contatos */}
      <section id="contatos" className="px-8 py-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Contatos</h2>
        <p className="text-gray-300 mb-4">
          Vamos conversar sobre QA, testes e automação e TI?  
          Estou aberta para oportunidades e colaborações.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:marinacindra13@gmail.com" className="hover:text-purple-400">📧 E-mail</a>
          <a href="https://www.linkedin.com/in/marina-cindra13" className="hover:text-purple-400">💼 LinkedIn</a>
          <a href="https://github.com/maricindra" className="hover:text-purple-400">🐙 GitHub</a>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 Marina Cindra - Portfolio QA
      </footer>
    </div>
  )
}