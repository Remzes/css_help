/**
 * Created by USALNVI on 22.01.2017.
 */

jQuery(function ($) {

        //Text for fulfilling`
        var ffTextArray = [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially",
            "unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over",
            "2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through",
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus"
        ];

        //Function to fulfill input element
        $("#randomFulfill").on("click", function () {
            var choice = Math.floor(Math.random() * 8);
            console.log(choice);
            $("#text-to-change").val(ffTextArray[choice].toString());
            $(paraToChange).html(ffTextArray[choice].toString());
        });//End of function

        //Create color picker for box-shadow properties
        $("#custom").spectrum({
            color: "transparent",
            preferredFormat: "rgb",
            showPalette: true
        });

        //Create color picker for color of the text itself
        $("#customColor").spectrum({
            color: "(0,0,0)",
            preferredFormat: "rgb",
            showPalette: true
        });

        //Create color picker for background-color of the text itself
        $("#customBColor").spectrum({
            color: "transparent",
            preferredFormat: "rgb",
            showPalette: true
        });

        //Create color picker for text-shadow properties
        $("#tsColor").spectrum({
            color: "transparent",
            preferredFormat: "rgb",
            showPalette: true
        });

        //Create color picker for border properties
        $("#clrzleftBord, #clrzrightBord, #clrztopBord, #clrzbottomBord, #clrzallBord").spectrum({
            color: "rgb(0,0,0)",
            preferredFormat: "rgb",
            showPalette: true
        });

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        var textInputField = $("#text-to-change");
        var paraToChange = $("#change-here");
        paraToChange.html(textInputField.val());

        //Change the text of the span element on keyup of the input field
        textInputField.on("input", function () {
            paraToChange.html(textInputField.val());
        });

        //--------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------Tab TWO functionality-------------------------------------------
        //--------------------------------------------------------------------------------------------------------------------------

        //Functions
        //Letter-spacing function
        if (msie > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            //Letter-spacing function for IE
            $("#letterSpacingInput").on("change", function () {
                paraToChange.css("letter-spacing", $(this).val() + "px");
                $("#letSpac").html($(this).val() + "px");
            });//End of Letter-spacing function for IE

            //Line-height function for IE
            $("#lineHeightInput").on("change", function () {
                paraToChange.css("line-height", $(this).val() + "px");
                $("#linHei").html($(this).val() + "px");
            });//End of Line-height function for IE

            //Text-alignment function for IE
            $("#left, #right, #center").on("change", function () {
                paraToChange.css("text-align", $(this).val());
            });//End of text-alignment function for IE

            //Text-decoration function for IE

            var decorationChoice = "";
            var thrh = "";
            var undln = "";
            var overln = "";

            //Create style tag only for text-decoration purpose
            $("head").append('<style type="text/css"></style>');
            var new_stylesheet = $("head").children(':last');

            //Make the text striketrhough
            $("#through").on("change", function () {
                (this.checked) ? thrh = " line-through " : thrh = "";
            });//End of the function

            //Make the text overlined
            $("#over").on("change", function () {
                (this.checked) ? overln = " overline " : overln = "";
            });//End of the function

            //Make the text underlined
            $("#under").on("change", function () {
                (this.checked) ? undln = " underline " : undln = "";
            });//End of the function

            $("#over, #under, #through").on("change", function () {
                decorationChoice = thrh + undln + overln;
                (!decorationChoice.match(/^.{0}$/)) ? new_stylesheet.html('#change-here{text-decoration: ' + decorationChoice + '}') : new_stylesheet.html("");
            });//End of the function

            //End of Text decoration function for IE

            //Text-transform function for IE
            $("#upper, #lower, #none").on("change", function () {
                ($(this).val() == "none") ? paraToChange.css("text-transform", "") : paraToChange.css("text-transform", $(this).val());
                if ($(this).val() == "uppercase") {
                    $("#scLabel").css("opacity", 0.5);
                    $("#smallCaps").prop("disabled", "disabled");
                    alert("The 'small-caps' for 'font-variant' was disabled because it has no effect with 'text-transform: uppercase'");
                } else {
                    $("#scLabel").css("opacity", 1);
                    $("#smallCaps").removeAttr("disabled");
                }
            }); //End of Text-transform function for IE

            //Word-spacing function for IE
            $("#wordSpacingInput").on("input", function () {
                $("#wordSpac").html($(this).val() + "px");
                paraToChange.css("word-spacing", $(this).val() + "px");
            });//End of word-spacing function for IE
        } else {
            //Letter-spacing function
            $("#letterSpacingInput").on("input", function () {
                paraToChange.css("letter-spacing", $(this).val() + "px");
                $("#letSpac").html($(this).val() + "px");
            });//End of Letter-spacing function

            //Line-height function
            $("#lineHeightInput").on("input", function () {
                paraToChange.css("line-height", $(this).val() + "px");
                $("#linHei").html($(this).val() + "px");
            });//End of line-height function

            //Text-alignment function
            $("#left, #right, #center").on("change", function () {
                paraToChange.css("text-align", $(this).val());
            });//End of text-alignment function

            //Text-decoration function
            var decorationChoice = "";
            var thrh = "";
            var undln = "";
            var overln = "";

            //Make the text striketrhough
            $("#through").on("change", function () {
                (this.checked) ? thrh = " line-through " : thrh = "";
            });//End of the function

            //Make the text overlined
            $("#over").on("change", function () {
                (this.checked) ? overln = " overline " : overln = "";
            });//End of the function

            //Make the text underlined
            $("#under").on("change", function () {
                (this.checked) ? undln = " underline " : undln = "";
            });//End of the function

            //Add style to the text
            $("#over, #under, #through").on("change", function () {
                decorationChoice = thrh + undln + overln;
                (!decorationChoice.match(/^.{0}$/)) ? paraToChange.css("text-decoration", decorationChoice) : paraToChange.css("text-decoration", "");
            });//End of the function
            //End of Text decoration function

            //Text-transform function
            $("#upper, #lower, #none").on("change", function () {
                ($(this).val() == "none") ? paraToChange.css("text-transform", "") : paraToChange.css("text-transform", $(this).val());
                if ($(this).val() == "uppercase") {
                    $("#scLabel").css("opacity", 0.5);
                    $("#smallCaps").prop("disabled", "disabled");
                    alert("The 'small-caps' for 'font-variant' was disabled because it has no effect with 'text-transform: uppercase'");
                } else {
                    $("#scLabel").css("opacity", 1);
                    $("#smallCaps").removeAttr("disabled");
                }
            }); //End of Text-transform function

            //Word-spacing function
            $("#wordSpacingInput").on("input", function () {
                $("#wordSpac").html($(this).val() + "px");
                paraToChange.css("word-spacing", $(this).val() + "px");
            });//End of word-spacing function

        }
        //End of the functions

        //--------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------End of functions for Tab TWO------------------------------------
        //--------------------------------------------------------------------------------------------------------------------------


        //--------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------Tab THREE functionality-----------------------------------------
        //--------------------------------------------------------------------------------------------------------------------------

        //Functions
        if (msie > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            //Font-size function for IE
            $("#fontSizeInput").on("change", function () {
                $("#fonSi").html($(this).val() + "px");
                paraToChange.css("font-size", $(this).val() + "px");
            });//End of Font-size function for IE

            //Font-style function for IE
            $("#italic, #oblique, #normalFS").on("change", function () {
                paraToChange.css("font-style", $(this).val());
            });//End of Font-style function for IE

            //Font-weight function for IE
            $("#fontWeightSelect").on("change", function () {
                paraToChange.css("font-weight", $(this).val());
            });//End of the Font-weight function for IE

            //Font-variant function for IE
            $("#smallCaps, #normalFV").on("change", function () {
                paraToChange.css("font-variant", $(this).val());
                if ($(this).val() == "small-caps") {
                    $("#upperLabel").css("opacity", 0.5);
                    $("#upper").prop("disabled", "disabled");
                    alert("'Uppercase' choice was disabled because it has no effect if you chose 'font-variant: small-caps'")
                } else {
                    $("#upperLabel").css("opacity", 1);
                    $("#upper").removeAttr("disabled");
                }
            });//End of the Font-variant function for IE;

        } else {
            //Font-size function
            $("#fontSizeInput").on("input", function () {
                $("#fonSi").html($(this).val() + "px");
                paraToChange.css("font-size", $(this).val() + "px");
            });//End of Font-size function

            //Font-style function for
            $("#italic, #oblique, #normalFS").on("change", function () {
                paraToChange.css("font-style", $(this).val());
            });//End of Font-style function

            //Font-weight function
            $("#fontWeightSelect").on("change", function () {
                paraToChange.css("font-weight", $(this).val());
            });//End of the Font-weight function

            //Font-variant function
            $("#smallCaps, #normalFV").on("change", function () {
                paraToChange.css("font-variant", $(this).val());
                if ($(this).val() == "small-caps") {
                    $("#upperLabel").css("opacity", 0.5);
                    $("#upper").prop("disabled", "disabled");
                    alert("'Uppercase' choice was disabled because it has no effect if you chose 'font-variant: small-caps'")
                } else {
                    $("#upperLabel").css("opacity", 1);
                    $("#upper").removeAttr("disabled");
                }
            });//End of the Font-variant function
        }
        //End of the functions

        //--------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------End of functions for Tab THREE----------------------------------
        //--------------------------------------------------------------------------------------------------------------------------

        //--------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------Tab FOUR functionality------------------------------------------
        //--------------------------------------------------------------------------------------------------------------------------

        //Functions
        var bsPropOb = {
            hshadow: "0",
            vshadow: "0",
            blur: "0",
            spread: "0",
            color: "rgba(0, 0, 0, 0)"
        };

        var tsPropOb = {
            hshadow: "0",
            vshadow: "0",
            blurRad: "0",
            color: "rgba(0, 0, 0, 0)"
        };

        if (msie > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {

            var cntBS = 1;
            var cntTS = 1;
            var cntTF = 1;
            var cntFF = 1;
            var cntSF = 1;
            var cntO = 1;
            var cntBorder = 1;

            //Function to open/close style-format properties for IE
            $("#openSFProperties").on("click", function () {
                $("#tabFour").toggle(500);
                cntSF++;
                (cntSF % 2 == 0) ? $("#openSFProperties").html("Close Properties") : $("#openSFProperties").html("Open Properties");
            });//End of function for IE

            //Function to open/close font-family properties for IE
            $("#openFFProperties").on("click", function () {
                $("#tabThree").toggle(500);
                cntFF++;
                (cntFF % 2 == 0) ? $("#openFFProperties").html("Close Properties") : $("#openFFProperties").html("Open Properties");
            });//End of function for IE

            //Function to open/close text-format properties for IE
            $("#openTFProperties").on("click", function () {
                $("#tabTwo").toggle(500);
                cntTF++;
                (cntTF % 2 == 0) ? $("#openTFProperties").html("Close Properties") : $("#openTFProperties").html("Open Properties");
            });//End of function for IE

            //Function to open/close box-shadow properties for IE
            $("#openBSProperties").on("click", function () {
                $(".box-shadow-section").toggle(500);
                cntBS++;
                (cntBS % 2 == 0) ? $("#openBSProperties").html("Close Properties") : $("#openBSProperties").html("Open Properties");
            });//End of function for IE

            //Function to open/close text-shadow properties for IE
            $("#openTSProperties").on("click", function () {
                $(".text-shadow-properties").toggle(500);
                cntTS++;
                (cntTS % 2 == 0) ? $("#openTSProperties").html("Close Properties") : $("#openTSProperties").html("Open Properties");
            });//End of function for IE

            //Function to open/close text-shadow properties for IE
            $("#openOProperties").on("click", function () {
                $(".opacity-section").toggle(500);
                cntO++;
                (cntO % 2 == 0) ? $("#openOProperties").html("Close Properties") : $("#openOProperties").html("Open Properties");
            });//End of function for IE

            //Function to open/close border properties for IE
            $("#openBorderProperties").on("click", function () {
                $(".border-properties").toggle(500);
                cntBorder++;
                (cntBorder % 2 == 0) ? $("#openBorderProperties").html("Close Properties") : $("#openBorderProperties").html("Open Propreties");
            });//End of the function for IE

            //Function to reset all box-shadow properties for IE
            $("#bsResetBtn").on("click", function (e) {
                $(":checkbox").prop("checked", "");
                $(".box-shadow-section [type='range']").prop("disabled", "disabled").val(0);
                $("[id$='Span']").html("0px");
                $("#custom").spectrum({
                    color: "#000",
                    preferredFormat: "rgba",
                    showPalette: true
                });
                $.each(bsPropOb, function (key, value) {
                    (key == "color") ? value = "#000000" : value = "0";
                });
                paraToChange.css("box-shadow", "");
                return false;
            });//End of function for IE

            //Function to reset all text-shadow properties for IE
            $("#bsTSResetBtn").on("click", function (e) {
                e.preventDefault();
                $(".text-shadow-properties :checkbox").prop("checked", "");
                $(".text-shadow-properties [type='range']").prop("disabled", "disabled").val(0);
                $("[id$='TSSpan']").html("0px");
                $("#tsColor").spectrum({
                    color: "#000",
                    preferredFormat: "rgba",
                    showPalette: true
                });
                $.each(tsPropOb, function (key, value) {
                    (key == "color") ? value = "#000000" : value = "0";
                });
                paraToChange.css("text-shadow", "");
            });//End of the function for IE

            //Box-shadow function for IE
            //Function is responsible for checkboxes with the label 'include' for IE
            $("#hs, #vs, #b, #sp, #c").on("change", function () {
                var dataAttr = $(this).data("role");
                var id = "#" + $(this).val() + "Range";
                if (this.checked) {
                    $(id).removeAttr("disabled");
                    bsPropOb[dataAttr] = $(id).val() + "px";
                } else {
                    $(id).attr("disabled", "disabled");
                    bsPropOb[dataAttr] = 0;
                }
            });//End of the function for IE

            //Function is responsible for the color change for IE
            $("#custom").on("change", function () {
                bsPropOb.color = $(this).spectrum("get").toHexString();
            });//End of the function for IE

            //Function to change the color of the text for IE
            $("#customColor").on("move.spectrum", function () {
                paraToChange.css("color", $(this).spectrum("get").toHexString());
                console.log($(this).spectrum("get").toHexString());
            });//End of the function for IE

            //Function to change the background color of the text for IE
            $("#customBColor").on("move.spectrum", function () {
                paraToChange.css("background-color", $(this).spectrum("get").toHexString());
                console.log($(this).spectrum("get").toHexString());
            });//End of the function for IE

            //Function is responsible for the chenging properties of vertical, horizontal shadow, blur and spread for IE
            $("#hsRange, #vsRange, #bRange, #spRange").on("change", function () {
                $("#" + $(this).attr("id") + "Span").html($(this).val() + "px");
                var objectElement = $(this).data("attribute");
                if ($(this).val() != 0) {
                    bsPropOb[objectElement] = $(this).val() + "px";
                } else {
                    bsPropOb[objectElement] = $(this).val() + "px";
                }
            });//End of the function for IE

            //Function is responsible for the button to generate box-shadow property for the text for IE
            $("#boxShadowGen").on("click", function () {
                $("#boxShadowGen").val(bsPropOb.hshadow + " " + bsPropOb.vshadow + " " + bsPropOb.blur + " " + bsPropOb.spread + " " + bsPropOb.color);
                paraToChange.css("box-shadow", $(this).val());
                return false;
            });//End of the function for IE
            //End Box Shadow function for IE

            //Text-shadow function for IE

            //Function is responsible for checkboxes with the label 'include' for IE
            $("#hsTS, #vsTS, #bTS").on("change", function () {
                var id = "#" + $(this).val() + "TSRange";
                var dataAttr = $(this).data("role");
                if (this.checked) {
                    $(id).removeAttr("disabled");
                    tsPropOb[dataAttr] = $(id).val() + "px";
                } else {
                    $(id).prop("disabled", "disabled");
                    tsPropOb[dataAttr] = 0;
                }
            });//End of the function for IE

            //Function to change the properties of text-shadow for IE
            $("#hsTSRange, #vsTSRange, #bTSRange").on("input", function () {
                var id = "#" + $(this).attr("id") + "TSSpan";
                var dataAttr = $(this).data("attribute");
                $(id).html($(this).val() + "px");
                if ($(this).val() != 0) {
                    tsPropOb[dataAttr] = $(this).val() + "px";
                } else {
                    tsPropOb[dataAttr] = 0;
                }
            });//End of the function

            //Function to change the color of text-shadow for IE
            $("#tsColor").on("change", function () {
                tsPropOb.color = $(this).spectrum("get").toHexString();
            });//Enf of the function for IE

            $("#boxTSShadowGen").on("click", function (e) {
                e.preventDefault();
                $(this).val(tsPropOb.vshadow + " " + tsPropOb.hshadow + " " + tsPropOb.blurRad + " " + tsPropOb.color);
                paraToChange.css("text-shadow", $(this).val());
            });//End of the function for IE

            //End Text Shadow function for IE

            //Function to change Border Properties function for IE

            var borderObject = {};
            var AllBorder = $("#allBord");
            var PartialBorder = $("#leftBord, #rightBord, #topBord, #bottomBord");

            //Function to open border properties
            $("#leftBord, #rightBord, #topBord, #bottomBord, #allBord").on("change", function () {
                var id = $(this).attr("id");
                $("#" + id + "ColorPara").toggle(300);
                var item = $(this);
                setTimeout(function () {
                    switch ($(item).is(":checked")) {
                        //When checkbox is checked
                        case true:
                            switch (id != "allBord") {
                                //When partial border checkbox is checked
                                case true:
                                    AllBorder.prop("disabled", true);

                                    break;
                                //When the whole border checkbox is checked
                                case false:
                                    PartialBorder.prop("disabled", true);
                                    break;
                            }

                            Object.defineProperty(borderObject, $(item).val(), {
                                value: {},
                                configurable: true,
                                writable: true,
                                enumerable: true
                            });
                            Object.defineProperty(borderObject[$(item).val()], "size", {
                                value: "1px",
                                configurable: true,
                                writable: true,
                                enumerable: true
                            });
                            Object.defineProperty(borderObject[$(item).val()], "color", {
                                value: "#000",
                                configurable: true,
                                writable: true,
                                enumerable: true
                            });
                            Object.defineProperty(borderObject[$(item).val()], "type", {
                                value: "solid",
                                configurable: true,
                                writable: true,
                                enumerable: true
                            });

                            var property = borderObject[$(item).val()].size + " " + borderObject[$(item).val()].color + " " + borderObject[$(item).val()].type;
                            $(paraToChange).css($(item).val(), property);

                            break;
                        //When checkbox is unchecked
                        case false:
                            switch (id != "allBord") {
                                //When partial border checkbox is unchecked
                                case true:
                                    switch (PartialBorder.is(":checked")) {
                                        //When all checkboxes is unchecked
                                        case false:
                                            AllBorder.prop("disabled", false);
                                            break;
                                    }
                                    break;
                                //When the whole border checkbox is unchecked
                                case false:
                                    PartialBorder.prop("disabled", false);
                                    break;
                            }
                            $(paraToChange).css($(item).val(), "");
                            delete borderObject[$(item).val()];
                            $("#clrz" + id).spectrum({
                                color: "#000",
                                preferredFormat: "rgba",
                                showPalette: true
                            });
                            $("#" + id + "Range").val(1);
                            $("#" + $(item).val() + "-span").val("1px");
                            $("#" + id + "Style" + " option[value='solid']").prop("selected", true);
                            break;
                    }
                }, 300);
            });
            //End of Open Border Properties Function

            //Function to change border color
            $("#clrzleftBord, #clrzrightBord, #clrztopBord, #clrzbottomBord, #clrzallBord").on("move.spectrum", function () {
                var side = $(this).data("side");
                borderObject[side].color = $(this).spectrum("get").toRgbString();
                $(paraToChange).css(side, borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type);
            });//End of function to change border color

            //Function to change border size
            $("#leftBordRange, #rightBordRange, #topBordRange, #bottomBordRange, #allBordRange").on("change", function () {
                var side = $(this).data("side");
                borderObject[side].size = $(this).val() + "px";
                $("#" + side + "-span").html($(this).val() + "px");
                $(paraToChange).css(side, borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type);
            });//End of function to change border size

            //Function to change border type
            $("#leftBordStyle, #rightBordStyle, #topBordStyle, #bottomBordStyle, #allBordStyle").on("change", function () {
                var side = $(this).data("side");
                borderObject[side].type = $(this).val();
                $(paraToChange).css(side, borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type);
            });//End of function to change border type

            //End of Change Border Properties function for IE

        } else {

            var cntBS = 1;
            var cntTS = 1;
            var cntO = 1;
            var cntBorder = 1;

            var textColor = "rgb(0,0,0)";
            var backColor = "transparent";
            var bsColor = "transparent";
            var tsColor = "transparent";
            var bColor = "transparent";

            //Function to open Style Format Properties
            function toggleStyleFormatProp() {
                var btn = "#openSFProperties";
                $("#tabFour").toggle(500);
                if ($(btn).attr("data-status") == "closed") {
                    $(btn).html("Close Properties");
                    $(btn).attr("data-status", "opened");
                } else {
                    $(btn).html("Open Properties");
                    $(btn).attr("data-status", "closed");
                }
            }//End of function

            //Function to open Font Format Properties
            function toggleFontFormatProp() {
                var btn = "#openFFProperties";
                $("#tabThree").toggle(500);
                if ($(btn).attr("data-status") == "closed") {
                    $(btn).html("Close Properties");
                    $(btn).attr("data-status", "opened");
                } else {
                    $(btn).html("Open Properties");
                    $(btn).attr("data-status", "closed");
                }
            }//End of function

            //Function to open Text Format Properties
            function toggleTextFormatProp() {
                var btn = "#openTFProperties";
                $("#tabTwo").toggle(500);
                if ($(btn).attr("data-status") == "closed") {
                    $(btn).html("Close Properties");
                    $(btn).attr("data-status", "opened");
                } else {
                    $(btn).html("Open Properties");
                    $(btn).attr("data-status", "closed");
                }
            }//End of function

            //Function to trigger main buttons functions
            $("#openSFProperties, #openFFProperties, #openTFProperties").on("click", function () {
                var id = $(this).attr("id");
                console.log(id);
                switch (id) {
                    case "openSFProperties":
                        toggleStyleFormatProp();
                        switch ($("#openTFProperties").attr("data-status") == "opened") {
                            case true:
                                toggleTextFormatProp();
                                break;
                        }
                        switch ($("#openFFProperties").attr("data-status") == "opened") {
                            case true:
                                toggleFontFormatProp();
                                break;
                        }
                        break;
                    case "openFFProperties":
                        toggleFontFormatProp();
                        switch ($("#openSFProperties").attr("data-status") == "opened") {
                            case true:
                                toggleStyleFormatProp();
                                break;
                        }
                        switch ($("#openTFProperties").attr("data-status") == "opened") {
                            case true:
                                toggleTextFormatProp();
                                break;
                        }
                        break;
                    case "openTFProperties":
                        toggleTextFormatProp();
                        switch ($("#openFFProperties").attr("data-status") == "opened") {
                            case true:
                                toggleFontFormatProp();
                                break;
                        }
                        switch ($("#openSFProperties").attr("data-status") == "opened") {
                            case true:
                                toggleStyleFormatProp();
                                break;
                        }
                        break;
                }
            });//End of function

            //Function to open properties inside style-format property
            function togglePropertiesInsideStyleFormatProp(btn) {
                var mainEl = $(btn).val();
                $(mainEl).toggle(500);
                if ($(btn).attr("data-status") == "closed") {
                    $(btn).html("Close Properties");
                    $(btn).attr("data-status", "opened");
                } else {
                    $(btn).html("Open Properties");
                    $(btn).attr("data-status", "closed");
                }
            }

            $("#openBSProperties, #openTSProperties, #openOProperties, #openBorderProperties").on("click", function () {
                var id = "#" + $(this).attr("id");
                togglePropertiesInsideStyleFormatProp(id);
                switch (id) {
                    case "#openBSProperties":
                        switch ($("#openTSProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openTSProperties");
                                break;
                        }
                        switch ($("#openOProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openOProperties");
                                break;
                        }
                        switch ($("#openBorderProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openBorderProperties");
                                break;
                        }
                        break;
                    case "#openTSProperties":
                        switch ($("#openBSProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openBSProperties");
                                break;
                        }
                        switch ($("#openOProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openOProperties");
                                break;
                        }
                        switch ($("#openBorderProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openBorderProperties");
                                break;
                        }
                        break;
                    case "#openOProperties":
                        switch ($("#openTSProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openTSProperties");
                                break;
                        }
                        switch ($("#openBSProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openBSProperties");
                                break;
                        }
                        switch ($("#openBorderProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openBorderProperties");
                                break;
                        }
                        break;
                    case "#openBorderProperties":
                        console.log(borderObject);
                        switch ($("#openBSProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openBSProperties");
                                break;
                        }
                        switch ($("#openTSProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openTSProperties");
                                break;
                        }
                        switch ($("#openOProperties").attr("data-status") == "opened") {
                            case true:
                                togglePropertiesInsideStyleFormatProp("#openOProperties");
                                break;
                        }
                        break;
                }
            });

            //Function to reset all box-shadow properties
            $("#bsResetBtn").on("click", function (e) {
                e.preventDefault();
                console.log(bsPropOb);
                $(".box-shadow-section :checkbox").prop("checked", "");
                $(".box-shadow-section [type='range']").prop("disabled", "disabled").val(0);
                $(".box-shadow-section [id$='Span']").html("0px");
                $("#custom").spectrum({
                    color: "rgba(0, 0, 0, 0)",
                    preferredFormat: "rgba",
                    showPalette: true
                });
                bsPropOb = {
                    hshadow: "0",
                    vshadow: "0",
                    blur: "0",
                    spread: "0",
                    color: "rgba(0, 0, 0, 0)"
                };

                $("#bsPara").css("opacity", 0.25);
                $("#bsRange").prop("disabled", true);
                paraToChange.css("box-shadow", "");
            });//End of function

            //Function to reset all text-shadow properties
            $("#bsTSResetBtn").on("click", function (e) {
                e.preventDefault();
                $(".text-shadow-properties :checkbox").prop("checked", "");
                $(".text-shadow-properties [type='range']").prop("disabled", "disabled").val(0);
                $("[id$='TSSpan']").html("0px");
                $("#tsColor").spectrum({
                    color: "rgba(0, 0, 0, 0)",
                    preferredFormat: "rgba",
                    showPalette: true
                });
                tsPropOb = {
                    hshadow: "0",
                    vshadow: "0",
                    blurRad: "0",
                    color: "rgba(0, 0, 0, 0)"
                };
                $("#tsPara").css("opacity", 0.25);
                $("#tsRange").prop("disabled", true);
                paraToChange.css("text-shadow", "");
            });//End of the function

            //Function to change the color of the text
            $("#customColor").on("move.spectrum", function () {
                paraToChange.css("color", $(this).spectrum("get").toRgbString());
                textColor = $(this).spectrum("get").toRgbString();
            });//End of the function


            //Function to change width
            $("#width").on("change", function () {
                $(paraToChange).css("width", $(this).val());
                $("#widthSpan").html($(this).val() + "px");
                $(".changing-p").css("width", parseInt($(this).val()) + 100);
            });//Enf of function
            
            //Function to change padding
            $("#padding").on("input", function(){
               $(paraToChange).css("padding", $(this).val());
                $("#paddingSpan").html($(this).val() + "px");
            });

            //Function to reset color of the text
            $("#resetColor").on("click", function () {
                paraToChange.css("color", "#000");
                $("#customColor").spectrum({
                    color: "(0,0,0)",
                    preferredFormat: "rgb",
                    showPalette: true
                })
            });//End of function to reset color of the text

            //Function to change the background color of the text
            $("#customBColor").on("move.spectrum", function () {
                paraToChange.css("background-color", $(this).spectrum("get").toRgbString());
                backColor = $(this).spectrum("get").toRgbString();
                console.log(backColor);
                switch (backColor != "rgba(0, 0, 0, 0)") {
                    case true:
                        $("#bcPara").css("display", "block");
                        $("#bcRange").prop("disabled", false);
                        break;
                    case false:
                        $("#bcPara").css("display", "none");
                        $("#bcRange").prop("disabled", true);
                        break;
                }
            });//End of the function

            //Function to reset background color of the text
            $("#resetBgColor").on("click", function () {
                paraToChange.css("background-color", "");
                $("#customBColor").spectrum({
                    color: "rgba(0,0,0,0)",
                    preferredFormat: "rgb",
                    showPalette: true
                })
            });//End of function to reset background color of the text

            //Box-shadow function

            //Function is responsible for checkboxes with the label 'include'
            $("#hs, #vs, #b, #sp").on("change", function () {
                var dataAttr = $(this).data("role");
                var id = "#" + $(this).val() + "Range";
                if (this.checked) {
                    $(id).removeAttr("disabled");
                    bsPropOb[dataAttr] = $(id).val() + "px";
                } else {
                    $(id).attr("disabled", "disabled");
                    bsPropOb[dataAttr] = 0;
                }
            });//End of the function

            //Function is responsible for the box-shadow color change
            $("#custom").on("change", function () {
                bsColor = $(this).spectrum("get").toRgbString();
                bsPropOb.color = $(this).spectrum("get").toRgbString();
            });//End of the function

            //Function is responsible for the changing properties of vertical, horizontal shadow, blur and spread
            $("#hsRange, #vsRange, #bRange, #spRange").on("input", function () {
                $("#" + $(this).attr("id") + "Span").html($(this).val() + "px");
                var objectElement = $(this).data("attribute");
                if ($(this).val() != 0) {
                    bsPropOb[objectElement] = $(this).val() + "px";
                } else {
                    bsPropOb[objectElement] = 0;
                }
            });//End of the function

            //Function is responsible for the button to generate box-shadow property for the text
            $("#boxShadowGen").on("click", function (e) {
                e.preventDefault();
                $("#boxShadowGen").val(bsPropOb.hshadow + " " + bsPropOb.vshadow + " " + bsPropOb.blur + " " + bsPropOb.spread + " " + bsPropOb.color);
                paraToChange.css("box-shadow", $(this).val());
                switch (bsPropOb.color != "rgba(0, 0, 0, 0)" && ((bsPropOb.hshadow != 0 && bsPropOb.hshadow != "0px") || (bsPropOb.vshadow != 0 && bsPropOb.vshadow != "0px") || (bsPropOb.blur != 0 && bsPropOb.blur != "0px") || (bsPropOb.spread != 0 && bsPropOb.spread != "0px"))) {
                    case true:
                        $("#bsPara").css("display", "block");
                        $("#bsRange").prop("disabled", false);
                        break;
                    case false:
                        $("#bsPara").css("display", "none");
                        $("#bsRange").prop("disabled", true);
                        break;
                }
            });//End of the function

            //End Box Shadow function

            //Text-shadow function

            //Function os responsible for checkboxes with the label 'include'
            $("#hsTS, #vsTS, #bTS").on("change", function () {
                var id = "#" + $(this).val() + "TSRange";
                var dataAttr = $(this).data("role");
                if (this.checked) {
                    $(id).removeAttr("disabled");
                    tsPropOb[dataAttr] = $(id).val() + "px";
                } else {
                    $(id).prop("disabled", "disabled");
                    tsPropOb[dataAttr] = 0;
                }
            });//End of the function

            //Function to change the properties of text-shadow
            $("#hsTSRange, #vsTSRange, #bTSRange").on("input", function () {
                var id = "#" + $(this).attr("id") + "TSSpan";
                var dataAttr = $(this).data("attribute");
                $(id).html($(this).val() + "px");
                if ($(this).val() != 0) {
                    tsPropOb[dataAttr] = $(this).val() + "px";
                } else {
                    tsPropOb[dataAttr] = 0;
                }
            });//End of the function

            //Function to change the color of text-shadow
            $("#tsColor").on("change", function () {
                tsColor = $(this).spectrum("get").toRgbString();
                tsPropOb.color = $(this).spectrum("get").toRgbString();
            });//Enf of the function

            $("#boxTSShadowGen").on("click", function (e) {
                e.preventDefault();
                $(this).val(tsPropOb.vshadow + " " + tsPropOb.hshadow + " " + tsPropOb.blurRad + " " + tsPropOb.color);
                paraToChange.css("text-shadow", $(this).val());
                switch (tsPropOb.color != "rgba(0, 0, 0, 0)" && ((tsPropOb.hshadow != "0" && tsPropOb != "0px") || (tsPropOb.vshadow != "0" && tsPropOb.vshadow != "0px") || (tsPropOb.blurRad != "0" && tsPropOb.blurRad != "0px"))) {
                    case true:
                        console.log("true");
                        $("#tsPara").css("display", "block");
                        $("#tsRange").prop("disabled", false);
                        break;
                    case false:
                        console.log("false");
                        $("#tsPara").css("display", "none");
                        $("#tsRange").prop("disabled", true);
                        break;
                }
                console.log(tsPropOb);
                console.log(tsPropOb.color != "rgba(0, 0, 0, 0)");
            });//End of the function

            //End Text Shadow function

            //Function to change Border Properties function

            var borderObject = {};
            var AllBorder = $("#allBord");
            var PartialBorder = $("#leftBord, #rightBord, #topBord, #bottomBord");

            //Function to change border radius
            $("#borderRadius").on("input", function () {
                $("#borderRadiusSpan").html($(this).val() + "px");
                $(paraToChange).css("border-radius", $(this).val() + "px");
            });//End of border radius function

            //Function to open border properties
            $("#leftBord, #rightBord, #topBord, #bottomBord, #allBord").on("change", function () {
                var id = $(this).attr("id");
                $("#" + id + "ColorPara").toggle(300);
                var item = $(this);
                setTimeout(function () {
                    switch ($(item).is(":checked")) {
                        //When checkbox is checked
                        case true:
                            switch (id != "allBord") {
                                //When partial border checkbox is checked
                                case true:
                                    AllBorder.prop("disabled", true);
                                    break;
                                //When the whole border checkbox is checked
                                case false:
                                    PartialBorder.prop("disabled", true);
                                    break;
                            }

                            $("#" + id + "Include").css("display", "block");
                            $("#" + id + "RangeOpacity").prop("disabled", false);

                            Object.defineProperty(borderObject, $(item).val(), {
                                value: {},
                                configurable: true,
                                writable: true,
                                enumerable: true
                            });
                            Object.defineProperty(borderObject[$(item).val()], "size", {
                                value: "1px",
                                configurable: true,
                                writable: true,
                                enumerable: true
                            });
                            Object.defineProperty(borderObject[$(item).val()], "color", {
                                value: "rgb(0,0,0)",
                                configurable: true,
                                writable: true,
                                enumerable: true
                            });
                            Object.defineProperty(borderObject[$(item).val()], "type", {
                                value: "solid",
                                configurable: true,
                                writable: true,
                                enumerable: true
                            });

                            var property = borderObject[$(item).val()].size + " " + borderObject[$(item).val()].color + " " + borderObject[$(item).val()].type;
                            $(paraToChange).css($(item).val(), property);

                            break;
                        //When checkbox is unchecked
                        case false:
                            switch (id != "allBord") {
                                //When partial border checkbox is unchecked
                                case true:
                                    switch (PartialBorder.is(":checked")) {
                                        //When all checkboxes is unchecked
                                        case false:
                                            AllBorder.prop("disabled", false);
                                            break;
                                    }
                                    break;
                                //When the whole border checkbox is unchecked
                                case false:
                                    PartialBorder.prop("disabled", false);
                                    break;
                            }
                            $("#" + id + "Include").css("display", "none");
                            $("#" + id + "RangeOpacity").prop("disabled", true).val(1);
                            $("#" + id + "Span").html(1);
                            $(paraToChange).css($(item).val(), "");
                            delete borderObject[$(item).val()];
                            $("#clrz" + id).spectrum({
                                color: "rgba0,0,0)",
                                preferredFormat: "rgba",
                                showPalette: true
                            });
                            $("#" + id + "Range").val(1);
                            $("#" + $(item).val() + "-span").html("1px");
                            $("#" + id + "Style" + " option[value='solid']").prop("selected", true);
                            break;
                    }
                }, 300);
            });
            //End of Open Border Properties Function

            //Function to change border color
            $("#clrzleftBord, #clrzrightBord, #clrztopBord, #clrzbottomBord, #clrzallBord").on("move.spectrum", function () {
                var side = $(this).data("side");
                borderObject[side].color = $(this).spectrum("get").toRgbString();
                $(paraToChange).css(side, borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type);
            });//End of function to change border color

            //Function to change border size
            $("#leftBordRange, #rightBordRange, #topBordRange, #bottomBordRange, #allBordRange").on("input", function () {
                var side = $(this).data("side");
                borderObject[side].size = $(this).val() + "px";
                $("#" + side + "-span").html($(this).val() + "px");
                $(paraToChange).css(side, borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type);
            });//End of function to change border size

            //Function to change border type
            $("#leftBordStyle, #rightBordStyle, #topBordStyle, #bottomBordStyle, #allBordStyle").on("change", function () {
                var side = $(this).data("side");
                borderObject[side].type = $(this).val();
                $(paraToChange).css(side, borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type);
            });//End of function to change border type

            //End of Change Border Properties function

            //Functions to change Opacity Properties function

            //Function to change color opacity
            $("#cRange").on("input", function () {
                var tempColor = textColor.replace("rgb", "rgba");
                $("#" + $(this).attr("id").replace("Range", "Span")).html($(this).val());
                var rgbaTextColor = tempColor.replace(/\)/i, ',' + $(this).val() + ')');
                $(paraToChange).css("color", rgbaTextColor);
            });//End of function to change color opacity

            //Function to change background color opacity
            $("#bcRange").on("input", function () {
                var tempColor = backColor.replace("rgb", "rgba");
                $("#" + $(this).attr("id").replace("Range", "Span")).html($(this).val());
                var rgbaTextColor = tempColor.replace(/\)/i, ',' + $(this).val() + ')');
                $(paraToChange).css("background-color", rgbaTextColor);
            });//End of function to change background color opacity

            //Function to change the whole element opacity
            $("#allRange").on("input", function () {
                $(paraToChange).css("opacity", $(this).val());
                $("#" + $(this).attr("id").replace("Range", "Span")).html($(this).val());
            });//End of function to change the whole element opacity

            //Function to change box-shadow color opacity
            $("#bsRange").on("input", function () {
                var tempColor = bsColor.replace("rgb", "rgba");
                $("#" + $(this).attr("id").replace("Range", "Span")).html($(this).val());
                bsPropOb.color = tempColor.replace(/\)/i, ',' + $(this).val() + ')');
                $(paraToChange).css("box-shadow", bsPropOb.hshadow + " " + bsPropOb.vshadow + " " + bsPropOb.blur + " " + bsPropOb.spread + " " + bsPropOb.color);
            });//End of function to change box-shadow color opacity

            //Function to change box-shadow color opacity
            $("#tsRange").on("input", function () {
                var tempColor = tsColor.replace("rgb", "rgba");
                $("#" + $(this).attr("id").replace("Range", "Span")).html($(this).val());
                tsPropOb.color = tempColor.replace(/\)/i, ',' + $(this).val() + ')');
                $(paraToChange).css("text-shadow", tsPropOb.vshadow + " " + tsPropOb.hshadow + " " + tsPropOb.blurRad + " " + tsPropOb.color);
            });//End of function to change box-shadow color opacity

            //Function to change border opacity
            $("#allBordRangeOpacity, #rightBordRangeOpacity, #leftBordRangeOpacity, #topBordRangeOpacity, #bottomBordRangeOpacity").on("input", function () {
                var id = $(this).attr("id").split("R")[0];
                var bordSide = $(this).data("side");
                var newColor = borderObject[bordSide].color.replace("rgb", "rgba").replace(/\)/i, ',' + $(this).val() + ')');
                $(paraToChange).css(bordSide, borderObject[bordSide].size + " " + newColor + " " + borderObject[bordSide].type);
                $("#" + id + "Span").html($(this).val());
            });

            //End of Opacity Properties function

            //TEST FUNCTION
            $("#fontSelect").on("change", function () {
                var values = $(this).val().split('|');
                console.log(values);
                $("head").append("<link href=\"https://fonts.googleapis.com/css?family=" + values[0] + "\" rel=\"stylesheet\">");
                $(paraToChange).css("font-family", values[1]);
            });
            //END OF TEST FUNCTION
        }
        //End of the functions

        //--------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------End of functions for Tab FOUR----------------------------------
        //--------------------------------------------------------------------------------------------------------------------------
    }
);
