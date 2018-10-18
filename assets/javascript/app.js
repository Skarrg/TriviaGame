$(document).ready(function() {
    var numberAnswered = 0;
    var timer = {
        time: 30,

        reset: function() {
            this.time = 30;
            $('.timer').html('<h2>' + timer.time + ' seconds remaining!</h2>');
        },

        start: function() {
            counter = setInterval(timer.count, 1000);
        },

        stop: function() {
            clearInterval(counter);
        },

        count: function() {
            timer.time--;
            if(timer.time >= 0) {
                $('.timer').html('<h2>' + timer.time + ' seconds remaining!</h2>');
            }
            else {
                //wrong answer function here
                numberAnswered++;
                timer.reset();
                if (numberAnswered < questionA.length) {
                    //load next question
                } else {
                    $('.answer').hide();
                    //show final score
                }
            }
        }
    };

    var questionA = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    var q1 = {
        q: "What is NOT a common alternate name for Bigfoot?",
        a1: "Sasquatch",
        a2: "Yeti",
        a3: "Wendigo",
        a4: "Fuzzy Wuzzy Mamma Jammer",
        check: [false, false, false, true],
        answer: "4. Fuzzy Wuzzy Mamma Jammer is not a common nickname, except to its mother."
    };
})