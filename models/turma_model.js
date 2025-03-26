const Turma_Controller = require("../controllers/turma_controler");
const Database = require("../utils/database");

class Turma_Model{
    #turma;
    #id_serie;

    get turma(){
        return this.#turma
    }
    set turma(value){
        this.#turma = value
    }
    
    get id_serie() {
        return this.#id_serie
    }
    set id_serie(value){
        this.#id_serie = value
    }

    constructor(turma,id_serie){
        this.#turma,
        this.#id_serie

    }

    async listar(){
            let SQL_text = `SELECT s.turma, s.id_serie`;
            let db = new Database();
            let lista = [];
            let rows = await db.ExecutaComando(SQL_text);
            for(let i = 0; i < rows.length; i++){
                lista.push(new Turma_Model(rows[i]["turma"], 
                                           rows[i]["id_serie"]));
            }
            return lista;
        }


    async inserir(){
            let SQL_text = `INSERT INTO turmas (turma, id_serie) 
                            VALUES (?, ?);`;
            let db = new Database();
            let valores = [this.#turma,this.#id_serie];        
            let resultado = await db.ExecutaComandoNonQuery(SQL_text, valores);        
            return resultado;
        }


    async obter(id){
            let SQL_text = "SELECT * FROM turmas WHERE id_series = ?";
            let db = new Database();
            let valores = [id];
            let lista = [];
            let rows = await db.ExecutaComando(SQL_text, valores);
            for(let i = 0; i < rows.length; i++){
                lista.push(new Turma_Model(rows[i]["turma"],
                                           rows[i]["id_serie"]));
            }
            return lista;
        }
    
    async atualizar(){
            let SQL_text = `UPDATE turmas 
                            SET turma = ?, 
                            WHERE id_series = ?;`;
            let db = new Database();
            let valores = [this.#turma, this.#id_serie];        
            let resultado = await db.ExecutaComandoNonQuery(SQL_text, valores);        
            return resultado;
        }    

    async excluir(){
            let SQL_text = "DELETE FROM turmas WHERE id_series = ?";
            let db = new Database();
            let valores = [this.#turma];
            let resultado = await db.ExecutaComandoNonQuery(SQL_text, valores);
            return resultado;
        }

}

module.exports = Turma_Controller;