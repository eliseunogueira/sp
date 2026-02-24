var lessonNumber = 169;

var lessonTitle = "Haber (To have - Auxiliary) - Future / Conditional";

var forExamples = ["(Yo) habré <i>limpiado</i>","<strong>Yo habré</strong> <i>limpiado</i> la casa antes de que tú vuelvas.","(Tú) habrás <i>mejorado</i>","En dos meses, <strong>tú habrás</strong> <i>mejorado</i> mucho.","(Nosotros) habremos <i>visitado</i>","<strong>Nosotros habremos</strong> <i>visitado</i> a veinte países después de nuestro viaje a América del Sur.","(Yo) habría <i>dormido</i>","<strong>Yo habría</strong> <i>dormido</i>, pero había demasiado ruido.","(Ellos) habrían <i>tomado</i>","<strong>Ellos habrían</strong> <i>tomado</i> un taxi, pero no tenían dinero.","(Ustedes) habrían <i>aprendido</i>","<strong>Ustedes habrían</strong> <i>aprendido</i> mucho si hubieran asistido a la clase de hoy."];

var engExamples = ["I will have <i>cleaned</i>","<em>I will have</em> <i>cleaned</i> the house before you come back.","you will have <i>improved</i>","In two months, <em>you will have</em> <i>improved</i> a lot.","We will have <i>visited</i>","<em>We will have</em> <i>visited</i> twenty countries after our trip to South America.","I would have <i>slept</i>","<em>I would have</em> <i>slept</i>, but there was too much noise.","They would have <i>taken</i>","<em>They would have</em> <i>taken</i> a taxi, but they didn't have any money.","You would have <i>learned</i>","<em>You would have</em> <i>learned</i> a lot if you had attended today's class."];

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
;var conjNum = [4,4,4,4,4,4,5,5,5,5,5,5];
var irregReason = [""];

var quizForExamples = ["<strong>Yo habré</strong> <i>aclarado</i> todo esto con ellos para cuando llegues aquí.","<strong>Tú habrás</strong> <i>merecido</i> tus vacaciones cuando todo esto termine.","<strong>Yo habría</strong> <i>organizado</i> una fiesta, pero no sabia que era tu cumpleaños.","<strong>El habría</strong> <i>apagado</i> la televisión, pero la película estuvo muy interesante."];var quizEngExamples = ["<em>I will have</em> <i>clarified</i> all of this with them by the time you get here.","<em>You will have</em> <i>deserved</i> your vacation when all of this is over.","<em>I would have</em> <i>organized</i> a party, but I didn't know it was your birthday.","<em>He would have</em> <i>turned off</i> the television, but the movie was very interesting."];

var extraNote = "The Spanish verb <strong>haber</strong> means <strong>to have</strong>. However, it is used instead of <strong>tener</strong> in compound verb tenses. For example, <strong>I have eaten</strong> would be <strong>he comido</strong>, and not <strong>tengo comido</strong>. They both mean <strong>to have</strong>, but remember that they are used quite differently.<br><br>In this presentation, we will highlight the full conjugation of the verb, but try to focus mainly on the verb <strong>haber</strong>. Once you know the conjugation of the verb <strong>haber</strong>, you will be able to conjugate all verbs in the perfect tenses, simply by adding the past participle.";