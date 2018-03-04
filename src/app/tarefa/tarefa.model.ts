import { SituacaoTarefa } from "./situacaoTarefa.model";

export class Tarefa {
    constructor(
        public idTarefa?: number,
        public titulo?: string,
        public descricao?: string,
        public dataCriacao?: Date,
        public dataEdicao?: Date,
        public dataConclusao?: Date,
        public situacaoTarefa?:SituacaoTarefa
    ) {
    }
}