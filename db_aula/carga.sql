CREATE TABLE IF NOT EXISTS clientes (
	cpf varchar(20) PRIMARY KEY,
    nome varchar(50),
    endereco varchar(50),
    cidade varchar(30),
    telefone varchar(20)
);

INSERT INTO clientes (cpf, nome, endereco, cidade, telefone) 
    VALUES ("111111111111", "Fulano de tal", "Rua X, 1", "Presidente Prudente", "(18)99554-4454");

INSERT INTO clientes (cpf, nome, endereco, cidade, telefone)
    VALUES ("222222222222", "Fulano de ciclano", "Rua V, 44", "Presidente Prudente", "(18)98754-454");

INSERT INTO clientes (cpf, nome, endereco, cidade, telefone) 
    VALUES ("333333333333", "João de Barro", "Rua das araras, 65", "Presidente Prudente", "(18)91654-4894");

INSERT INTO clientes (cpf, nome, endereco, cidade, telefone) 
    VALUES ("444444444444", "Ciclano de fulano", "Rua Y, 09", "Presidente Prudente", "(18)65466-5465");