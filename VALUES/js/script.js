function addNum(){

    var a,b,c;
    a=parseInt(document.getElementById("val1").value);
    b=parseInt(document.getElementById("val2").value);
    c=a+b;
    document.getElementById("res").value=c;
    document.getElementById("res").disabled=true;
    }
    function subNum(){

        var a,b,c;
        a=parseInt(document.getElementById("val1").value);
        b=parseInt(document.getElementById("val2").value);
        c=a-b;
        document.getElementById("res").value=c;
        document.getElementById("res").disabled=true;
        }
        function mulNum(){

            var a,b,c;
            a=parseInt(document.getElementById("val1").value);
            b=parseInt(document.getElementById("val2").value);
            c=a*b;
            document.getElementById("res").value=c;
            document.getElementById("res").disabled=true;
            }
            function divNum(){

                var a,b,c;
                a=parseInt(document.getElementById("val1").value);
                b=parseInt(document.getElementById("val2").value);
                c=a/b;
                document.getElementById("res").value=c;
                document.getElementById("res").disabled=true;
                }
                