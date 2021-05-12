/*  | Periodic Guess Who : A Guess-Who type Game for the periodic Table    |
    | Copyright (C) <2021>  <William Rahal>                                |
    |                                                                      |
    | This program is free software: you can redistribute it and/or modify |
    | it under the terms of the GNU General Public License as published by |
    | the Free Software Foundation, either version 3 of the License, or    |
    | (at your option) any later version.                                  |
    |                                                                      |
    | This program is distributed in the hope that it will be useful,      |
    | but WITHOUT ANY WARRANTY; without even the implied warranty of       |
    | MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the        |
    | GNU General Public License for more details.                         |
    |                                                                      |
    | You should have received a copy of the GNU General Public License    |
    | along with this program. (See COPY.txt)                              |
    | If not, see <https://www.gnu.org/licenses/                           |
    |                                                                      |
    | You can contact me (the author) at rahal.w@hotmail.ca,               |
    | or on github as @Inlaudible                                          |*/
jQuery(document).ready(function() {
    let numGuesses = 0;
    updateGuesses();

    function updateGuesses (){
        $('#NumberGuesses').html("Number of Guesses: " + numGuesses.toString());
    }
    $(document).on("click", "#AddGuess", function (){
        numGuesses++;
        updateGuesses();
    })
    $(document).on("click", "#MinusGuess", function (){
        numGuesses--;
        updateGuesses();
    })

    $(document).on("click", "td.element", function (){
        $(this).toggleClass("clicked")
    })
    $(document).on("click", "#ResetButton", function (){
        $(".element").removeClass("clicked");
    })
    $(document).on("click", "#p1", function(){
        $(".period1").toggleClass("clicked")
    })
    $(document).on("click", "#p2", function(){
        $(".period2").toggleClass("clicked")
    })
    $(document).on("click", "#p3", function(){
        $(".period3").toggleClass("clicked")
    })
    $(document).on("click", "#p4", function(){
        $(".period4").toggleClass("clicked")
    })
    $(document).on("click", "#p5", function(){
        $(".period5").toggleClass("clicked")
    })
    $(document).on("click", "#p6", function(){
        $(".period6").toggleClass("clicked")
    })
    $(document).on("click", "#p7", function(){
        $(".period7").toggleClass("clicked")
    })

    $(document).on("click", "#g1", function(){
        $(".group1").toggleClass("clicked");
    })
    $(document).on("click", "#g2", function(){
        $(".group2").toggleClass("clicked");
    })
    $(document).on("click", "#g3", function(){
        $(".group3").toggleClass("clicked");
    })
    $(document).on("click", "#g4", function(){
        $(".group4").toggleClass("clicked");
    })
    $(document).on("click", "#g5", function(){
        $(".group5").toggleClass("clicked");
    })
    $(document).on("click", "#g6", function(){
        $(".group6").toggleClass("clicked");
    })
    $(document).on("click", "#g7", function(){
        $(".group7").toggleClass("clicked");
    })
    $(document).on("click", "#g8", function(){
        $(".group8").toggleClass("clicked");
    })
    $(document).on("click", "#g9", function(){
        $(".group9").toggleClass("clicked");
    })
    $(document).on("click", "#g10", function(){
        $(".group10").toggleClass("clicked");
    })
    $(document).on("click", "#g11", function(){
        $(".group11").toggleClass("clicked");
    })
    $(document).on("click", "#g12", function(){
        $(".group12").toggleClass("clicked");
    })
    $(document).on("click", "#g13", function(){
        $(".group13").toggleClass("clicked");
    })
    $(document).on("click", "#g14", function(){
        $(".group14").toggleClass("clicked");
    })
    $(document).on("click", "#g15", function(){
        $(".group15").toggleClass("clicked");
    })
    $(document).on("click", "#g16", function(){
        $(".group16").toggleClass("clicked");
    })
    $(document).on("click", "#g17", function(){
        $(".group17").toggleClass("clicked");
    })
    $(document).on("click", "#g18", function(){
        $(".group18").toggleClass("clicked");
    })

    $(document).on("click", "#AMButton", function (){
        $(".AM").toggleClass("clicked");
    })
    $(document).on("click", "#AEMButton", function (){
        $(".AEM").toggleClass("clicked");
    })
    $(document).on("click", "#LANButton", function (){
        $(".LAN").toggleClass("clicked");
    })
    $(document).on("click", "#ACTButton", function (){
        $(".ACT").toggleClass("clicked");
    })
    $(document).on("click", "#TMButton", function (){
        $(".TM").toggleClass("clicked");
    })
    $(document).on("click", "#PTMButton", function (){
        $(".PTM").toggleClass("clicked");
    })
    $(document).on("click", "#MButton", function (){
        $(".M").toggleClass("clicked");
    })
    $(document).on("click", "#RNMButton", function (){
        $(".RNM").toggleClass("clicked");
    })
    $(document).on("click", "#NGButton", function (){
        $(".NG").toggleClass("clicked");
    })
    $(document).on("click", "#PnButton", function (){
        $(".group15").toggleClass("clicked");
    })
    $(document).on("click", "#ChButton", function (){
        $(".group16").toggleClass("clicked");
    })
    $(document).on("click", "#HaButton", function (){
        $(".group17").toggleClass("clicked");
    })
    $(document).on("click", "#UNCLASButton", function (){
        $(".UNK").toggleClass("clicked");
    })
    $(document).on("click", "#SolidButton", function (){
        $(".solid").toggleClass("clicked");
    })
    $(document).on("click", "#LiquidButton", function (){
        $(".liquid").toggleClass("clicked");
    })
    $(document).on("click", "#GasButton", function (){
        $(".gas").toggleClass("clicked");
    })
})