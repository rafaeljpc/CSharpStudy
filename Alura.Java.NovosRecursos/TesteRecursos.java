import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

public class TesteRecursos {
    public static void main(String[] args) {
        testLambdas();

        testStream();
    }

    private static void testStream() {
        System.out.println("--------------- Test Stream");

        List<Curso> cursos = Arrays.asList(
            new Curso("nome", 1),
            new Curso("C", 3),
            new Curso("Java", 9),
            new Curso("Python", 13)
        );

        cursos.sort(Comparator.comparing(Curso::getAlunos));

        cursos.stream()
            .filter(c -> c.getAlunos() > 5)
            .map(c -> c.getAlunos())
            .forEach(System.out::println);

        System.out.println("---------------");

        cursos.stream()
            .filter(c -> c.getAlunos() > 5)
            .findAny()
            .ifPresent(c -> System.out.println(c.getNome()));
    }

	private static void testLambdas() {
		List<String> palavras = Arrays.asList(
            "abelha",
            "teste",
            "java",
            "recursos",
            "novos"
        );

        palavras.sort(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.length() - o2.length();
            }
        });

        palavras.forEach(new Consumer<String>() {
            @Override
            public void accept(String t) {
                System.out.println(t);   
            }
        });

        System.out.println("------------------------------");

        palavras.sort((o1, o2) -> {
            return Integer.compare(o2.length(), o1.length());
        });

        palavras.forEach(t -> System.out.println(t));

        System.out.println("------------------------------");

        palavras.sort(Comparator.comparing(s -> s.charAt(0)));

        palavras.forEach(t -> System.out.println(t));

        System.out.println("------------------------------");
    }
}