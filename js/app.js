signo=  document.getElementById('sign')
      reset=  document.getElementById('on')
      suma=  document.getElementById('mas')
      resta=  document.getElementById('menos')
      multiplicacion=  document.getElementById('por')
      division= document.getElementById('dividido')
      igual= document.getElementById('igual')
      punto = document.getElementById('punto')
      uno=  document.getElementById('1')
      dos=  document.getElementById('2')
      tres=  document.getElementById('3')
      cuatro=  document.getElementById('4')
      cinco=  document.getElementById('5')
      seis= document.getElementById('6')
      siete=  document.getElementById('7')
      ocho= document.getElementById('8')
      nueve=  document.getElementById('9')
      cero = document.getElementById('0')

var calculadora = {
      pantalla: document.getElementById('display'),
      valorPantalla: "0",
      operacion: "",
      primerValor: 0,
      segundoValor: 0,
      ultimoValor: 0,
      resultado: 0,
      teclaIgual: false,

  init: (function(){
    this.asignarEfectoBotones("tecla");
    this.asignarEventosBotones();
  }),

  //Efectos de los botones
  asignarEfectoBotones: function(){
    uno.addEventListener("mousedown",function(){
              uno.setAttribute("style","transform:scale(0.95,0.95)")
          });
          uno.addEventListener("mouseup",function(){
              uno.setAttribute("style","transform:scale(1,1)")
          });
          dos.addEventListener("mousedown",function(){
                dos.setAttribute("style","transform:scale(0.95,0.95)")
            });
            dos.addEventListener("mouseup",function(){
                dos.setAttribute("style","transform:scale(1,1)")
            });
            tres.addEventListener("mousedown",function(){
                tres.setAttribute("style","transform:scale(0.95,0.95)")
            });
            tres.addEventListener("mouseup",function(){
                tres.setAttribute("style","transform:scale(1,1)")
            });
            cuatro.addEventListener("mousedown",function(){
                cuatro.setAttribute("style","transform:scale(0.95,0.95)")
            });
            cuatro.addEventListener("mouseup",function(){
                cuatro.setAttribute("style","transform:scale(1,1)")
            });
            cinco.addEventListener("mousedown",function(){
                cinco.setAttribute("style","transform:scale(0.95,0.95)")
            });
            cinco.addEventListener("mouseup",function(){
                cinco.setAttribute("style","transform:scale(1,1)")
            });
            seis.addEventListener("mousedown",function(){
                seis.setAttribute("style","transform:scale(0.95,0.95)")
            });
            seis.addEventListener("mouseup",function(){
                seis.setAttribute("style","transform:scale(1,1)")
            });
            siete.addEventListener("mousedown",function(){
                siete.setAttribute("style","transform:scale(0.95,0.95)")
            });
            siete.addEventListener("mouseup",function(){
                siete.setAttribute("style","transform:scale(1,1)")
            });
            ocho.addEventListener("mousedown",function(){
                ocho.setAttribute("style","transform:scale(0.95,0.95)")
            });
            ocho.addEventListener("mouseup",function(){
                ocho.setAttribute("style","transform:scale(1,1)")
            });
            nueve.addEventListener("mousedown",function(){
                nueve.setAttribute("style","transform:scale(0.95,0.95)")
            });
            nueve.addEventListener("mouseup",function(){
                nueve.setAttribute("style","transform:scale(1,1)")
            });
            cero.addEventListener("mousedown",function(){
                cero.setAttribute("style","transform:scale(0.95,0.95)")
            });
            cero.addEventListener("mouseup",function(){
                cero.setAttribute("style","transform:scale(1,1)")
            });
            sign.addEventListener("mousedown",function(){
                sign.setAttribute("style","transform:scale(0.95,0.95)")
            });
            sign.addEventListener("mouseup",function(){
                sign.setAttribute("style","transform:scale(1,1)")
            });
            raiz.addEventListener("mousedown",function(){
                raiz.setAttribute("style","transform:scale(0.95,0.95)")
            });
            raiz.addEventListener("mouseup",function(){
                raiz.setAttribute("style","transform:scale(1,1)")
            });
            dividido.addEventListener("mousedown",function(){
                dividido.setAttribute("style","transform:scale(0.95,0.95)")
            });
            dividido.addEventListener("mouseup",function(){
                dividido.setAttribute("style","transform:scale(1,1)")
            });
            por.addEventListener("mousedown",function(){
                por.setAttribute("style","transform:scale(0.95,0.95)")
            });
            por.addEventListener("mouseup",function(){
                por.setAttribute("style","transform:scale(1,1)")
            });
            punto.addEventListener("mousedown",function(){
                punto.setAttribute("style","transform:scale(0.95,0.95)")
            });
            punto.addEventListener("mouseup",function(){
                punto.setAttribute("style","transform:scale(1,1)")
            });
            menos.addEventListener("mousedown",function(){
                menos.setAttribute("style","transform:scale(0.95,0.95)")
            });
            menos.addEventListener("mouseup",function(){
                menos.setAttribute("style","transform:scale(1,1)")
            });
            igual.addEventListener("mousedown",function(){
                igual.setAttribute("style","transform:scale(0.95,0.95)")
            });
            igual.addEventListener("mouseup",function(){
                igual.setAttribute("style","transform:scale(1,1)")
            });
            mas.addEventListener("mousedown",function(){
                mas.setAttribute("style","transform:scale(0.95,0.95)")
            });
            mas.addEventListener("mouseup",function(){
                mas.setAttribute("style","transform:scale(1,1)")
            });
            on.addEventListener("mousedown",function(){
                on.setAttribute("style","transform:scale(0.95,0.95)")
            });
            on.addEventListener("mouseup",function(){
                on.setAttribute("style","transform:scale(1,1)")
            });
  },

  asignarEventosBotones: function(){
    document.getElementById("0").addEventListener("click", function(){
      calculadora.ingresarNumero("0");
    });
    document.getElementById("1").addEventListener("click", function(){
      calculadora.ingresarNumero("1");
    });
    document.getElementById("2").addEventListener("click", function(){
      calculadora.ingresarNumero("2");
    });
    document.getElementById("3").addEventListener("click", function(){
      calculadora.ingresarNumero("3");
    });
    document.getElementById("4").addEventListener("click", function(){
      calculadora.ingresarNumero("4");
    });
    document.getElementById("5").addEventListener("click", function(){
      calculadora.ingresarNumero("5");
    });
    document.getElementById("6").addEventListener("click", function(){
      calculadora.ingresarNumero("6");
    });
    document.getElementById("7").addEventListener("click", function(){
      calculadora.ingresarNumero("7");
    });
    document.getElementById("8").addEventListener("click", function(){
      calculadora.ingresarNumero("8");
    });
    document.getElementById("9").addEventListener("click", function(){
      calculadora.ingresarNumero("9");
    });
    document.getElementById('on').addEventListener("click", function(){
      calculadora.limpiarPantalla();
    });
    document.getElementById('sign').addEventListener("click", function(){
      calculadora.cambiarSigno();
    });
    document.getElementById('punto').addEventListener("click", function(){
      calculadora.puntoDecimal();
    });
    document.getElementById('raiz').addEventListener("click", function(){
      calculadora.operaciones("raiz");
    });
    document.getElementById('dividido').addEventListener("click", function(){
      calculadora.operaciones("/");
    });
    document.getElementById('por').addEventListener("click", function(){
      calculadora.operaciones("*");
    });
    document.getElementById('menos').addEventListener("click", function(){
      calculadora.operaciones("-");
    });
    document.getElementById('mas').addEventListener("click", function(){
      calculadora.operaciones("+");
    });
    document.getElementById('igual').addEventListener("click", function(){
      calculadora.resultadoPantalla();
    });

  },

  ingresarNumero: function(numero){
    if (this.valorPantalla.length < 8) {
      if(this.valorPantalla == "0"){
        this.valorPantalla = "";
        this.valorPantalla = this.valorPantalla + numero;
      }else{
        this.valorPantalla = this.valorPantalla + numero;
      }
      this.actualizarPantalla();
    }
  },

  limpiarPantalla: function(){
    this.valorPantalla = "0";
    this.operacion = "0";
    this.primerValor = 0;
    this.segundoValor = 0;
    this.resultado = 0;
    this.teclaIgual = false;
    this.ultimoValor = 0;
    this.actualizarPantalla();
  },

  cambiarSigno: function(){
    if (this.valorPantalla != "0") {
      var aux;
      if (this.valorPantalla.charAt(0) == "-") {
        aux = this.valorPantalla.slice(1);
      } else {
        aux = "-" + this.valorPantalla;
      }
      this.valorPantalla = "";
      this.valorPantalla = aux;
      this.actualizarPantalla();
    }
  },

  actualizarPantalla: function(){
    this.pantalla.innerHTML = this.valorPantalla;
  },

  puntoDecimal: function(){
    if (this.valorPantalla.indexOf(".") == -1) {
      if (this.valorPantalla == "") {
        this.valorPantalla = this.valorPantalla + "0.";
      }else {
        this.valorPantalla = this.valorPantalla + ".";
      }
      this.actualizarPantalla();
    }
  },

  operaciones: function(oper){
    this.primerValor = parseFloat(this.valorPantalla);
    this.valorPantalla = "";
    this.operacion = oper;
    this.teclaIgual = false;
    this.actualizarPantalla();
  },

  resultadoPantalla: function(){
    if(!this.teclaIgual){
      this.segundoValor = parseFloat(this.valorPantalla);
      this.ultimoValor = this.segundoValor;

      this.ejecutarOperacion(this.primerValor, this.segundoValor, this.operacion);
    } else {
      this.ejecutarOperacion(this.primerValor, this.ultimoValor, this.operacion);
    }

    this.primerValor = this.resultado;

    this.valorPantalla = "";

    if(this.resultado.toString().length < 9){
      this.valorPantalla = this.resultado.toString();
    }else{
      this.valorPantalla = this.resultado.toString().slice(0, 9) + "...";
    }

    this.teclaIgual = true;
    this.actualizarPantalla();
  },

  ejecutarOperacion: function(primerValor, segundoValor, operacion){
    switch (operacion) {
      case "+":
        this.resultado = eval(primerValor + segundoValor);
        break;
      case "-":
        this.resultado = eval(primerValor - segundoValor);
        break;
      case "*":
        this.resultado = eval(primerValor * segundoValor);
        break;
      case "/":
        this.resultado = eval(primerValor / segundoValor);
        break;
      case "raiz":
        this.resultado = eval(Math.sqrt(primerValor));
        break;
      default:
        this.resultado = "Error";
    }
  }
}

calculadora.init();
