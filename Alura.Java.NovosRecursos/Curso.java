public class Curso {

    private String nome;
    private int alunos;

    public Curso(String nome, int alunos) {
        this.nome = nome;
        this.alunos = alunos;
    }

    /**
     * @return the nome
     */
    public String getNome() {
        return nome;
    }

    /**
     * @return the alunos
     */
    public int getAlunos() {
        return alunos;
    }

    @Override
    public String toString() {
        return String.format("%s - %d", nome, alunos) ;
    }
}