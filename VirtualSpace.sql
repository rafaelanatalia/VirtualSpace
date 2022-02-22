-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`planos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`planos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_plano` VARCHAR(45) NULL,
  `preco` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_loja` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `foto` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  `planos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `nome_UNIQUE` (`nome_loja` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_usuarios_planos1_idx` (`planos_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_planos1`
    FOREIGN KEY (`planos_id`)
    REFERENCES `mydb`.`planos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`itens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`itens` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `foto` VARCHAR(45) NULL,
  `titulo` VARCHAR(45) NULL,
  `descricao` VARCHAR(45) NULL,
  `preco` VARCHAR(45) NULL,
  `usuarios_id` INT NOT NULL,
  `usuarios_planos_id` INT NOT NULL,
  `usuarios_id1` INT NOT NULL,
  `usuarios_planos_id1` INT NOT NULL,
  PRIMARY KEY (`id`, `usuarios_id`, `usuarios_planos_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_itens_usuarios1_idx` (`usuarios_id1` ASC, `usuarios_planos_id1` ASC) VISIBLE,
  CONSTRAINT `fk_itens_usuarios1`
    FOREIGN KEY (`usuarios_id1`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Beneficios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Beneficios` (
  `id` INT NOT NULL,
  `alterar_cor` VARCHAR(45) NULL,
  `alterar_menu` VARCHAR(45) NULL,
  `Carrosel` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`planos_has_Beneficios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`planos_has_Beneficios` (
  `planos_id` INT NOT NULL,
  `Beneficios_id` INT NOT NULL,
  PRIMARY KEY (`planos_id`, `Beneficios_id`),
  INDEX `fk_planos_has_Beneficios_Beneficios1_idx` (`Beneficios_id` ASC) VISIBLE,
  INDEX `fk_planos_has_Beneficios_planos1_idx` (`planos_id` ASC) VISIBLE,
  CONSTRAINT `fk_planos_has_Beneficios_planos1`
    FOREIGN KEY (`planos_id`)
    REFERENCES `mydb`.`planos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_planos_has_Beneficios_Beneficios1`
    FOREIGN KEY (`Beneficios_id`)
    REFERENCES `mydb`.`Beneficios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcliente`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedido` (
  `idpedido` INT NOT NULL AUTO_INCREMENT,
  `data_pedido` VARCHAR(45) NOT NULL,
  `data_entrega` VARCHAR(45) NOT NULL,
  `cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`idpedido`),
  UNIQUE INDEX `idpedido_UNIQUE` (`idpedido` ASC) VISIBLE,
  INDEX `fk_pedido_cliente1_idx` (`cliente_idcliente` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_cliente1`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `mydb`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedido_has_itens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedido_has_itens` (
  `pedido_idpedido` INT NOT NULL,
  `itens_id` INT NOT NULL,
  `itens_usuarios_id` INT NOT NULL,
  `itens_usuarios_planos_id` INT NOT NULL,
  PRIMARY KEY (`pedido_idpedido`, `itens_id`, `itens_usuarios_id`, `itens_usuarios_planos_id`),
  INDEX `fk_pedido_has_itens_itens1_idx` (`itens_id` ASC, `itens_usuarios_id` ASC, `itens_usuarios_planos_id` ASC) VISIBLE,
  INDEX `fk_pedido_has_itens_pedido1_idx` (`pedido_idpedido` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_has_itens_pedido1`
    FOREIGN KEY (`pedido_idpedido`)
    REFERENCES `mydb`.`pedido` (`idpedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_has_itens_itens1`
    FOREIGN KEY (`itens_id` , `itens_usuarios_id` , `itens_usuarios_planos_id`)
    REFERENCES `mydb`.`itens` (`id` , `usuarios_id` , `usuarios_planos_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
