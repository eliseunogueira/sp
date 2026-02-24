var lessonNumber = 168;

var lessonTitle = "Haber (To have - Auxiliary) - Past";

var forExamples = ["(Yo) había <i>cargado</i>","<strong>Yo había</strong> <i>cargado</i> mi cámara, pero ahora la batería está vacía.","(Tú) habías <i>buscado</i>","<strong>Tú habías</strong> <i>buscado</i> tu auto en el estacionamiento por veinte minutos.","(Ella) había <i>estudiado</i>","<strong>Ella había</strong> <i>estudiado</i> mucho para ese examen.","(Nosotros) habíamos <i>cambiado</i>","<strong>Nosotros habíamos</strong> <i>cambiado</i> mucho en solo un año.","(Ustedes) habían <i>elegido</i>","<strong>Ustedes habían</strong> <i>elegido</i> trabajar juntos.","(Ellos) habían <i>comido</i>","<strong>Ellos habían</strong> <i>comido</i> sin mí."];

var engExamples = ["I had <i>charged</i>","<em>I had</em> <i>charged</i> my camera but now the battery is empty.","You had <i>looked for</i>","<em>You had</em> <i>looked for</i> your car in the parking lot for twenty minutes.","She had <i>studied</i>","<em>She had</em> <i>studied</i> a lot for that exam.","We had <i>changed</i>","<em>We had</em> <i>changed</i> a lot in only one year.","You had <i>decided</i>","<em>You had</em> <i>decided</i> to work together.","They had eaten","<em>They had</em> eaten without me."];

var btnColor = ["#00BFFF","#001E51","#0066FF","#00025B"];

var forConj1 = ["(yo) h<strong>e</strong>","(tú) ha<strong>s</strong>","(usted) ha","(él/ella) ha","(nosotros) h<strong>emos</strong>","(ustedes) ha<strong>n</strong>","(ellos/ellas) ha<strong>n</strong>"];
var forConj2 = ["(yo) h<strong>ube</strong>","(tú) h<strong>ubiste</strong>","(usted) h<strong>ubo</strong>","(él/ella) h<strong>ubo</strong>","(nosotros) h<strong>ubimos</strong>","(ustedes) h<strong>ubieron</strong>","(ellos/ellas) h<strong>ubieron</strong>"];
var forConj3 = ["(yo) hab<strong>ía</strong>","(tú) hab<strong>ías</strong>","(usted) hab<strong>ía</strong>","(él/ella) hab<strong>ía</strong>","(nosotros) hab<strong>íamos</strong>","(ustedes) hab<strong>ían</strong>","(ellos/ellas) hab<strong>ían</strong>"];
var forConj4 = ["(yo) hab<strong>ré</strong>","(tú) hab<strong>rás</strong>","(usted) hab<strong>rá</strong>","(él/ella) hab<strong>rá</strong>","(nosotros) hab<strong>remos</strong>","(ustedes) hab<strong>rán</strong>","(ellos/ellas) hab<strong>rán</strong>"];
var forConj5 = ["(yo) hab<strong>ría</strong>","(tú) hab<strong>rías</strong>","(usted) hab<strong>ría</strong>","(él/ella) hab<strong>ría</strong>","(nosotros) hab<strong>ríamos</strong>","(ustedes) hab<strong>rían</strong>","(ellos/ellas) hab<strong>rían</strong>"];

var engConj1 = ["I have","you have (informal)","you have (formal)","he/she/it has","we have","you have (plural)","they have"];
var engConj2 = ["I had","you had (informal)","you had (formal)","he/she/it had","we had","you had (plural)","they had"];
var engConj3 = ["I had","you had (informal)","you had (formal)","he/she/it had","we had","you had (plural)","they had"];
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
;var conjNum = [3,3,3,3,3,3,3,3,3,3,3,3];
var irregReason = [""];

var quizForExamples = ["<strong>Yo había</strong> <i>cenado</i> antes de llegar.","<strong>Tú habías</strong> <i>quemado</i> tus tostadas.","<strong>El había</strong> <i>recomendado</i> no caminar en la calle durante la noche.","<strong>Ellos habían</strong> <i>sacado</i> la basura."];var quizEngExamples = ["<em>I had</em> <i>had dinner</i> before arriving.","<em>You had</em> burnt your toasts.","<em>He had</em> <i>recommended</i> not to walk in the street at night.","<em>They had</em> <i>taken out</i> the garbage."];

var extraNote = "The Spanish verb <strong>haber</strong> means <strong>to have</strong>. However, it is used instead of <strong>tener</strong> in compound verb tenses. For example, <strong>I have eaten</strong> would be <strong>he comido</strong>, and not <strong>tengo comido</strong>. They both mean <strong>to have</strong>, but remember that they are used quite differently.<br><br>In this presentation, we will highlight the full conjugation of the verb, but try to focus mainly on the verb <strong>haber</strong>. Once you know the conjugation of the verb <strong>haber</strong>, you will be able to conjugate all verbs in the perfect tenses, simply by adding the past participle.";