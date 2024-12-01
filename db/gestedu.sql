-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 01/12/2024 às 17:43
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gestedu`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `alunos`
--

CREATE TABLE `alunos` (
  `RMAluno` int(11) NOT NULL,
  `Nome` varchar(70) DEFAULT NULL,
  `CPF` varchar(14) DEFAULT NULL,
  `DataNascimento` date DEFAULT NULL,
  `Endereco` varchar(100) DEFAULT NULL,
  `Telefone` varchar(14) NOT NULL,
  `Situacao` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `alunos`
--

INSERT INTO `alunos` (`RMAluno`, `Nome`, `CPF`, `DataNascimento`, `Endereco`, `Telefone`, `Situacao`) VALUES
(20296821, 'Pedro Frank', '53132598187', '2000-02-12', 'Av. Pip pop', '11972658765', 'Reprovado'),
(202262021, 'Vagner Lópes', '632.234.215-23', '1994-03-11', 'Av. Dona Zilda', '21942314832', 'Reprovado'),
(202842023, 'Pedro Vagner', '632.234.215-23', '1994-03-11', 'Av. Dona Zilda', '21942314832', 'Aprovado'),
(202962023, 'Caio Henrique', '533.259.218-12', '2004-04-12', 'Av Principe Lopes, 852', '11965327812', 'Aprovado'),
(234312023, 'Maria Clara', '627.451.389-14', '2003-09-30', 'Rua B, 456', '11987563214', 'Reprovado'),
(235122023, 'Ana Beatriz', '745.632.987-10', '2004-07-15', 'Rua D, 321', '11934569875', 'Aprovado'),
(235232023, 'João Pedro', '416.234.578-19', '2005-01-25', 'Rua C, 789', '11966587412', 'Aprovado'),
(235432023, 'Larissa Souza', '426.871.395-25', '2002-03-22', 'Rua F, 987', '11956473892', 'Aprovado'),
(235652023, 'Gabriel Silva', '539.187.654-91', '2003-11-10', 'Rua E, 654', '11998456123', 'Reprovado');

-- --------------------------------------------------------

--
-- Estrutura para tabela `universidades`
--

CREATE TABLE `universidades` (
  `idUniversidade` int(11) NOT NULL,
  `login` varchar(60) DEFAULT NULL,
  `senha` varchar(60) DEFAULT NULL,
  `perfil` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `universidades`
--

INSERT INTO `universidades` (`idUniversidade`, `login`, `senha`, `perfil`) VALUES
(1, 'Centro Universitario Eniac', 'eniac123', 'universidade'),
(2, 'Caio Henrique', 'teste123', 'aluno');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`RMAluno`);

--
-- Índices de tabela `universidades`
--
ALTER TABLE `universidades`
  ADD PRIMARY KEY (`idUniversidade`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `universidades`
--
ALTER TABLE `universidades`
  MODIFY `idUniversidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
