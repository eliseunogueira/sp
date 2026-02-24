var lessonNumber = 167;

var lessonTitle = "Haber (To have - Auxiliary) - Present";

var forExamples = ["Haber","Estoy feliz de <strong>haber</strong> nadado con los delfines.","(Yo) he <i>ayudado</i>","<strong>Yo he</strong> <i>ayudado</i> a los estudiantes de mi clase.","(Yo) he <i>aprendido</i>","<strong>Yo he</strong> <i>aprendido</i> mucho en la clase de hoy.","(Tú) has <i>hecho</i>","¿Qué <strong>tú has</strong> <i>hecho</i> para arreglar la computadora?","(Tú) has <i>caminado</i>","¿Cuántos kilómetros <strong>tú has</strong> <i>caminado</i>?","(Usted) ha <i>trabajado</i>","<strong>Usted ha</strong> <i>trabajado</i> bastante, tiene que descansar un poco.","(Él) ha <i>comido</i>","<strong>Mi perro ha</strong> <i>comido</i> toda su comida.","(Ella) ha <i>ganado</i>","<strong>Ella ha</strong> <i>ganado</i> la carrera.","(Nosotros) hemos <i>comprado</i>","<strong>Nosotros hemos</strong> <i>comprado</i> una nueva casa.","(Nosotros) hemos <i>encontrado</i>","<strong>Nosotros hemos</strong> <i>encontrado</i> el camino correcto.","(Ustedes) han <i>llamado</i>","¿<strong>Ustedes han</strong> <i>llamado</i> a un mecánico?","(Ustedes) han <i>llegado</i>","<strong>Ustedes han</strong> <i>llegado</i> demasiado tarde.","(Ellos) han <i>subido</i>","<strong>Ellos han</strong> <i>subido</i> la montaña en dos días.","(Ellas) han <i>terminado</i>","<strong>Ellas han</strong> <i>terminado</i> todas sus tareas."];

var engExamples = ["To have","I am happy <em>to have</em> swum with the dolphins.","I have <i>helped</i>","<em>I have</em> <i>helped</i> the students of my class.","I have <i>learned</i>","<em>I have</em> <i>learned</i> a lot in today's class.","You have <i>done</i>","What <em>have you</em> <i>done</i> to fix the computer?","You have <i>walked</i>","How many kilometres <em>have you</em> <i>walked</i>?","You have <i>worked</i>","<em>You have</em> <i>worked</i> enough, you have to rest a bit.","He has <i>eaten</i>","<em>My dog has</em> <i>eaten</i> all his food.","She has <i>won</i>","<em>She has</em> <i>won</i> the race.","We have <i>bought</i>","<em>We have</em> <i>bought</i> a new house.","We have <i>found</i>","<em>We have</em> <i>found</i> the right path.","You have <i>called</i>","<em>Have you</em> <i>called</i> a mechanic?","You have <i>arrived</i>","<em>You have</em> <i>arrived</i> too late.","They have <i>climbed</i>","<em>They have</em> <i>climbed</i> the mountain in two days.","They have <i>finished</i>","<em>They have</em> <i>finished</i> all their homework."];

var btnColor = ["#00BFFF","#001E51","#0066FF","#00025B"];

var forConj1 = ["(yo) h<strong>e</strong>","(tú) ha<strong>s</strong>","(usted) ha","(él/ella) ha","(nosotros) h<strong>emos</strong>","(ustedes) ha<strong>n</strong>","(ellos/ellas) ha<strong>n</strong>"];
var forConj2 = ["(yo) h<strong>ube</strong>","(tú) h<strong>ubiste</strong>","(usted) h<strong>ubo</strong>","(él/ella) h<strong>ubo</strong>","(nosotros) h<strong>ubimos</strong>","(ustedes) h<strong>ubieron</strong>","(ellos/ellas) h<strong>ubieron</strong>"];
var forConj3 = ["(yo) hab<strong>ía</strong>","(tú) hab<strong>ías</strong>","(usted) hab<strong>ía</strong>","(él/ella) hab<strong>ía</strong>","(nosotros) hab<strong>íamos</strong>","(ustedes) hab<strong>ían</strong>","(ellos/ellas) hab<strong>ían</strong>"];
var forConj4 = ["(yo) hab<strong>ré</strong>","(tú) hab<strong>rás</strong>","(usted) hab<strong>rá</strong>","(él/ella) hab<strong>rá</strong>","(nosotros) hab<strong>remos</strong>","(ustedes) hab<strong>rán</strong>","(ellos/ellas) hab<strong>rán</strong>"];
var forConj5 = ["(yo) hab<strong>ría</strong>","(tú) hab<strong>rías</strong>","(usted) hab<strong>ría</strong>","(él/ella) hab<strong>ría</strong>","(nosotros) hab<strong>ríamos</strong>","(ustedes) hab<strong>rían</strong>","(ellos/ellas) hab<strong>rían</strong>"];

var engConj1 = ["I have","you have (informal)","you have (formal)","he/she/it has","we have","you have (plural)","they have"];
var engConj2 = ["I had","you had (informal)","you had (formal)","he/she/it had","we had","you had (plural)","they had"];
var engConj3 = ["I was having","you were having (informal)","you were having (formal)","he/she/it was having","we were having","you were having (plural)","they were having"];
var engConj4 = ["I will have","you will have (informal)","you will have (formal)","he/she/it will have","we will have","you will have (plural)","they will have"];
var engConj5 = ["I would have","you would have (informal)","you would have (formal)","he/she/it would have","we would have","you would have (plural)","they would have"];

var quizConj1 = ["he","has","ha","hemos","han","han"];
var quizConj2 = ["hube","hubiste","hubo","hubimos","hubieron","hubieron"];
var quizConj3 = ["había","habías","había","habíamos","habían","habían"];
var quizConj4 = ["habré","habrás","habrá","habremos","habrán","habrán"];
var quizConj5 = ["habría","habrías","habría","habríamos","habrían","habrían"];

var verbTypeNum = 11;
var forConj6 = "habiendo";
var forConj7 = 'h';
var pronominal = false
;var conjNum = [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var irregReason = [""];

var quizForExamples = ["<strong>Yo he</strong> <i>hecho</i> todo lo que podía.","<strong>Tú has</strong> <i>firmado</i> los papeles?","<strong>Ella ha</strong> <i>dormido</i> doce horas anoche.","<strong>Nosotras hemos</strong> <i>salvado</i> la vida del paciente.","<strong>Ustedes han</strong> <i>protegido</i> a los niños.","<strong>Ellos han</strong> <i>estudiado</i> mucho todo el año."];var quizEngExamples = ["<em>I have</em> <i>done</i> all that I could.","<em>Have you</em> <i>signed</i> the papers?","<em>She has</em> <i>slept</i> twelve hours last night.","<em>We have</em> <i>saved</i> the life of the patient.","<em>You have</em> <i>protected</i> the children.","<em>They have</em> <i>studied</i> a lot all year."];

var extraNote = "The Spanish verb <strong>haber</strong> means <strong>to have</strong>. However, it is used instead of <strong>tener</strong> in compound verb tenses. For example, <strong>I have eaten</strong> would be <strong>he comido</strong>, and not <strong>tengo comido</strong>. They both mean <strong>to have</strong>, but remember that they are used quite differently.<br><br>In this presentation, we will highlight the full conjugation of the verb, but try to focus mainly on the verb <strong>haber</strong>. Once you know the conjugation of the verb <strong>haber</strong>, you will be able to conjugate all verbs in the perfect tenses, simply by adding the past participle.";