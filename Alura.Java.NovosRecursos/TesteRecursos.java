import java.time.Duration;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class TesteRecursos {
    public static void main(String[] args) {
        testLambdas();

        testStream();

        testNewDate();
    }

    private static void testNewDate() {
        System.out.println("--------------- Test New Date");
        LocalDate hoje = LocalDate.now();

        LocalDate aDate = LocalDate.of(2018, 11, 11);

        Period period = Period.between(aDate, hoje);
        System.out.println(String.format("Passou %d dias", period.get(ChronoUnit.DAYS)));

        Duration duration = Duration.between(aDate.atTime(0, 0), hoje.atTime(0, 0));
        System.out.println(String.format("Passou %d dias", duration.toDays()));

        System.out.println("hoje=" + hoje.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
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
        
        System.out.println("---------------");
        
        Map<String, Curso> mCursos = cursos.stream()
            .filter(c -> c.getAlunos() > 5)
            .collect(Collectors.toMap(c -> c.getNome(), c -> c));
        
        System.out.println(mCursos);
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