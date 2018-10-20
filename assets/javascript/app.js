$(document).ready(function () {
    var numberAnswered = 0;
    var numberCorrect = 0;
    var numberWrong = 0;
    var answerChosen ='';

    function setup() {
        numberAnswered = 0;
        $('.answer').hide();
        $('.question').append('<button type="button" class ="btn btn-block btn-warning" id="startButton"> Trivia Time! </button>');
        $('#startButton').on('click', function() {
            $(this).hide();
            timer.start();
            getQuestion(numberAnswered);
        })
    }

    var timer = {
        time: 15,

        reset: function () {
            this.time = 15;
            $('.timer').html('<h2>' + timer.time + ' seconds remaining!</h2>');
        },

        start: function () {
            counter = setInterval(timer.count, 1000);
        },

        stop: function () {
            clearInterval(counter);
        },

        count: function () {
            timer.time--;
            if (timer.time >= 0) {
                $('.timer').html('<h2>' + timer.time + ' seconds remaining!</h2>');
            }
            else {
                outOfTime();
                numberAnswered++;
                timer.reset();
                if (numberAnswered < questionA.length) {
                    getQuestion(questionChoice)
                } else {
                    $('.answer').hide();
                    endScreen();
                }
            }
        }
    };


    var q1 = {
        q: "What is NOT a common alternate name for Bigfoot?",
        a1: "Sasquatch",
        a2: "Yeti",
        a3: "Wendigo",
        a4: "Fuzzy Wuzzy Mamma Jammer",
        check: [false, false, false, true],
        answer: "4. Fuzzy Wuzzy Mamma Jammer is not a common nickname, except to its mother."
    };

    var q2 = {
        q: "Which of these is a collective noun for Vampires?",
        a1: "Murder",
        a2: "Coven",
        a3: "Bite",
        a4: "Bucket",
        check: [false, true, false, false],
        answer: "2: Coven. Other common ones are Clutch, Brood, Pack, or Clan."
    };

    var q3 = {
        q: "What is a Chupacabra?",
        a1: "A blood sucking creature that lives in Puerto Rico.",
        a2: "Ted Cruz's interior after he sheds his outer scales and plastiskin.",
        a3: "A goat that has grown extra eyes all around it's skull and shrieks on the hilltop at midnight.",
        a4: "A guy who films himself giving pillows to people then starting a pillow fight.",
        check: [true, false, false, false],
        answer: "1. It was named that by a comedian in 1995."
    };

    var q4 = {
        q: "How can you become a werewolf?",
        a1: "Getting bitten by a werewolf.",
        a2: "Drinking the blood of a werewolf.",
        a3: "Getting cursed by your enemy.",
        a4: "All of the above.",
        check: [false, false, false, true],
        answer: "4. Don't try to do all three, you'll probably die instead of becoming three wolves."
    };

    var q5 = {
        q: "Which fake vampire is based on a real life vampire legend?",
        a1: "The Count from Sesame Street.",
        a2: "Edward Cullen from Twilight",
        a3: "That one girl you met at the club on goth night. Yeah the one with the tooth tattoo.",
        a4: "Elizabeth Báthory of Hungaria.",
        check: [true, false, false, false],
        answer: "1. Vampires supposedly had to count everything they saw, so people would scatter salt or seeds to ward against them."
    };

    var q6 = {
        q: "Which of these is the name of a type of enormous carnivorous bat from Indonesia?",
        a1: "George",
        a2: "Wakleia",
        a3: "Ahool",
        a4: "Gesundheit",
        check: [false, false, true, false],
        answer: "4. Ahool. These large bats swoop down and pluck prey from the ground, including humans."
    };

    var q7 = {
        q: "What country do tales of the Olgoi-Khorkhoi come from?",
        a1: "Turkey",
        a2: "Mongolia",
        a3: "Denial",
        a4: "Canada",
        check: [false, true, false, true],
        answer: "2. Mongolia. These 4-foot long blood red earth worms surface from the sands of the gobi desert when it rains."
    };

    var q8 = {
        q: "A Pixiu is a ______ from chinese mythology?",
        a1: "Winged lion that protects practicioners of Feng Shui.",
        a2: "Black Cat that can walk between worlds.",
        a3: "General from ancient time's loyal battle rabbit",
        a4: "Tall set of empty clothes that follows behind merchants that cheat customers when they leave town and englufs them",
        check: [true, false, false, false],
        answer: "1. They are considered suspicious creatures of good fortune."
    };

    var q9 = {
        q: "An atmospheric ghost light told about in legends in Japan is called a _____.",
        a1: "Jinmenju",
        a2: "Joleen",
        a3: "Waira",
        a4: "Janjanbi",
        check: [false, false, false, true],
        answer: "4. It is named after the sound it makes as it floats."
    };

    var q10 = {
        q: "What are the brightly colored statues of fantastical creatures in Oaxaca called?",
        a1: "Benedict Cumberbatch",
        a2: "Alebrije",
        a3: "Illuminato",
        a4: "Coco",
        check: [false, true, false, false],
        answer: "2. These statues became popular in parades and galleries in the 1930s."
    };

    var q11 = {
        q: "What is unique about Baba Yaga's hut?",
        a1: "It is crafted from candy.",
        a2: "It is a giant hand that emerges from the ground.",
        a3: "It has chicken legs.",
        a4: "The walls are filled with the hearts of stillborn children",
        check: [false, false, true, false],
        answer: "3. She also flies around in a mortar wielding a pestle. Good aesthetic."
    };

    var questionA = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];

    function getQuestion(questionChoice) {
        timer.reset();
        
        $(".question").html("<h3>" + questionA[questionChoice].q + "</h3>");
        $("#buttona").text(questionA[questionChoice].a1).show();
        $("#buttonb").text(questionA[questionChoice].a2).show();
        $("#buttonc").text(questionA[questionChoice].a3).show();
        $("#buttond").text(questionA[questionChoice].a4).show();
    }

    function rightAnswer() {
        numberCorrect++;
        alert('CORRECT! ' + questionA[numberAnswered].answer);
    }

    function wrongAnswer() {
        numberWrong++;
        alert('INCORRECT. The correct answer was: ' + questionA[numberAnswered].answer);
    }

    function outOfTime() {
        numberWrong++;
        alert("TIME'S UP! The correct answer was: " + questionA[numberAnswered].answer);
    }

    function endScreen() {
        $('.question').empty();
        $('.question').append('<h2>' + numberCorrect + ' correct answers</h2>');
        $('.question').append('<h2>' + numberWrong + ' incorrect answers</h2>');
        timer.stop();
        $('.timer').hide();
    }

    setup();
    $('.answer').on('click', function() {
        console.log($(this));

        if (this.id == 'buttona'){
             answerChosen = 'a';
        } else if (this.id == 'buttonb'){
             answerChosen = 'b';
        } else if (this.id == 'buttonc'){
             answerChosen = 'c';
        } else if (this.id == 'buttond'){
             answerChosen = 'd';
        }

        if ((answerChosen == 'a') && (questionA[numberAnswered].check[0] == true)) {
            rightAnswer();
        } else if ((answerChosen == 'a') && (questionA[numberAnswered].check[0] == false)) {
            wrongAnswer();
        }

        if ((answerChosen == 'b') && (questionA[numberAnswered].check[1] == true)) {
            rightAnswer();
        } else if ((answerChosen == 'b') && (questionA[numberAnswered].check[1] == false))  {
            wrongAnswer();
        }

        if ((answerChosen == 'c') && (questionA[numberAnswered].check[2] == true)) {
            rightAnswer();
        } else if ((answerChosen == 'c') && (questionA[numberAnswered].check[2] == false)) {
            wrongAnswer();
        }

        if ((answerChosen == 'd') && (questionA[numberAnswered].check[3] == true)) {
            rightAnswer();
        } else if ((answerChosen == 'd') && (questionA[numberAnswered].check[3] == false)) {
            wrongAnswer();
        }

        $('.question').text('');
        $('#buttona').text('');
        $('#buttonb').text('');
        $('#buttonc').text('');
        $('#buttond').text('');
        numberAnswered++;

        if (numberAnswered < questionA.length) {
            getQuestion(numberAnswered);
        } else {
            $(".answer").hide();
            endScreen();
        }
    })
});