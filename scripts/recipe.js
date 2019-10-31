var portions = 1;



function addRecipe(numOfRecipe){
    if('portions' in sessionStorage){
        portions = sessionStorage.getItem('portions');
    }else{
        portions = 1;
    }
    document.getElementById("description_div").removeChild(document.getElementById("description"));
    var recipeDiv = document.createElement("div");
    recipeDiv.setAttribute("id", "description");
    
    var recipe1 = `
        <h2>SAŁATKA Z GRUSZKĄ I ORZECHAMI WŁOSKIMI</h2>
        <img src="img/salad.jpg" class="center recipeImg"></img>
        <h3>Składniki</h3>
        <p>
            <label for="spinner">Ilość porcji:</label>
            <input id="spinner" name="Ilość">
            <button id="getvalue">Zatwierdź</button>
        </p>
        <ul>
            <li>`+(portions*100).toString()+` g rukoli</li>
            <li>`+portions.toString()+` dojrzała i miękka gruszka</li>
            <li>`+(portions*100).toString()+` g sera z niebieską pleśnią (lub brie, camembert)</li>
            <li>`+(portions*4).toString()+` plasterki szynki suszonej, dojrzewającej</li>
            <li>`+(portions*0.5).toString()+` szklanki orzechów włoskich</li>
            <li>sos: 2 łyżki oliwy z pierwszego tłoczenia, 2 łyżeczki soku z cytryny, 1 łyżka syropu klonowego, sól i pieprz</li>
            <li>opcjonalnie: zagęszczony ocet balsamiczny</li>
        </ul>
        <hr width="50%">
        <h3>Przygotowanie</h3>
        <ul>
            <li>Umytą i osuszoną rukolę ułożyć w salaterkach. Gruszkę obrać, pokroić na ćwiartki, wykroić gniazda nasienne, ćwiartki pokroić jeszcze na ok. 1/2 cm plasterki, ułożyć na rukoli.</li>
            <li>Dodać pokrojony w kosteczkę ser oraz pokrojoną na paski szynkę. Posypać orzechami.</li>
            <li>Wymieszać składniki sosu, doprawić odrobiną soli i świeżo zmielonym pieprzem, polać po sałatce. Całość warto też skropić zagęszczonym octem balsamicznym.</li>
        </ul>
    `
    
    var recipe2 = `
        <h2>OWSIANKA Z PRAŻONYMI JABŁKAMI</h2>
        <img src="img/porridge.jpg" class="center recipeImg"></img>
        <h3>Składniki</h3>
        <p>
            <label for="spinner">Ilość porcji:</label>
            <input id="spinner" name="Ilość">
            <button id="getvalue">Zatwierdź</button>
        </p>
        <ul>
            <li>`+(portions*1).toString()+` szklanka płatków owsianych</li>
            <li>`+(portions*3).toString()+` szklanki mleka</li>
            <li>`+(portions*3).toString()+` łyżki cukru (lub do smaku)</li>
            <li>`+(portions*2).toString()+` jabłka (twarde, kwaśne)</li>
            <li>`+(portions*2).toString()+` łyżki cukru (lub do smaku)</li>
            <li>cynamon</li>
        </ul>
        <hr width="50%">
        <h3>Przygotowanie</h3>
        <ul>
            <li>Płatki owsiane wsypać do garnka i wypłukać kilkakrotnie zmieniając wodę. Odcedzić, wlać mleko, dodać odrobinę soli i zagotować.</li>
            <li>Zmniejszyć ogień i gotować do miękkości przez ok. 15 minut, co chwilę mieszając, doprawić cukrem. W międzyczasie przygotować jabłka. Gdyby owsianka była za gęsta, dodajemy więcej mleka.</li>
            <li>Jabłka obrać, pokroić na ćwiartki, usunąć gniazda nasienne. Jabłka pokroić w kosteczkę, włożyć do garnka, dodać cukier i co chwilę mieszając gotować przez ok. 15 minut, lub do czasu aż jabłka zmiękną. Pod koniec doprawić cynamonem (ok. 1 łyżeczki).</li>
            <li>Owsiankę nałożyć do miseczek, dodać jabłka i opcjonalnie posypać brązowym cukrem lub skropić syropem klonowym.</li>
        </ul>

    `
    
    var recipe3 = `
        <h2>KREWETKI Z WARZYWAMI PO CHIŃSKU</h2>
        <img src="img/shrimps.jpg" class="center recipeImg"></img>
        <h3>Składniki</h3>
        <p>
            <label for="spinner">Ilość porcji:</label>
            <input id="spinner" name="Ilość">
            <button id="getvalue">Zatwierdź</button>
        </p>
        <ul>
            <li>`+(portions*100).toString()+` g ryżu</li>
            <li>ok. `+(portions*250).toString()+` g mrożonych krewetek</li>
            <li>`+(portions*2).toString()+` łyżki oleju roślinnego</li>
            <li>`+(portions*0.5).toString()+` marchewki</li>
            <li>`+(portions*0.5).toString()+` papryki</li>
            <li>`+(portions*5).toString()+` cm kawałek cukinii</li>
            <li>`+(portions*2).toString()+` ząbki czosnku</li>
            <li>`+(portions*0.5).toString()+` cebuli</li>
        </ul>
        <hr width="50%">
        <h3>Przygotowanie</h3>
        <ul>
            <li>Ryż ugotować w lekko osolonej wodzie. Krewetki rozmrozić, obrać z pancerzy, oderwać ogonki i oczyścić.</li>
            <li>Marchewkę obrać i pokroić na cieniutkie plasterki. Paprykę pokroić w kostkę. Czosnek obrać i pokroić na plasterki, cebulę pokroić w piórka. Imbir obrać i zetrzeć na drobnej tarce.</li>
            <li>W woku (lub na dużej patelni) na 1 łyżce oleju podsmażać przez 3 minuty marchewkę, paprykę oraz czosnek. Następnie dodać cukinię i smażyć często mieszając jeszcze przez ok. 5 minut, pod koniec dodać cebulę, imbir oraz doprawić warzywa solą i chili.</li>
            <li>Przesunąć podsmażone warzywa na brzeg naczynia. W wolne miejsce wlać drugą łyżkę oleju i włożyć krewetki. Smażyć na większym ogniu ciągle mieszając, przez ok. 1 minutę. Wymieszać z warzywami i chwilę razem podgrzać.</li>
            <li>Oddzielnie wymieszać sos sojowy z mąką ziemniaczaną, wodą i cukrem. Wlać mieszankę na patelnię i ciągle mieszając zagotować. Jeśli sos staje się za gęsty można podlewać wodą ciągle mieszając.</li>
            <li>Podawać z ugotowanym ryżem.</li>
        </ul>

    `
    
    switch(numOfRecipe){
        case 1:
            recipeDiv.innerHTML = recipe1;
            document.getElementById('ch1').style.borderTopColor = "#ff0000";
            document.getElementById('ch2').style.borderTopColor = "#ffffff";
            document.getElementById('ch3').style.borderTopColor = "#ffffff";
            break;
        case 2:
            recipeDiv.innerHTML = recipe2;
            document.getElementById('ch1').style.borderTopColor = "#ffffff";
            document.getElementById('ch2').style.borderTopColor = "#ff0000";
            document.getElementById('ch3').style.borderTopColor = "#ffffff";
            break;
        case 3:
            recipeDiv.innerHTML = recipe3;
            document.getElementById('ch1').style.borderTopColor = "#ffffff";
            document.getElementById('ch2').style.borderTopColor = "#ffffff";
            document.getElementById('ch3').style.borderTopColor = "#ff0000";
            break;
        default:
            break;
    }
    
    $( function() {
    var spinner = $( "#spinner" ).spinner().val(portions);

    $( "#getvalue" ).on( "click", function() {
        if(spinner.spinner("value") > 0){
            sessionStorage.setItem('portions', spinner.spinner("value"));
            addRecipe(numOfRecipe);
        }else{
            $( "#dialog" ).dialog('open');
        }
    });

    $( "button" ).button();
    } );
    localStorage.setItem('selectedRecipe', numOfRecipe.toString());
    document.getElementById("description_div").appendChild(recipeDiv);
    
}