let fault_counter = 0;
let fault_list = ["Egy számot írj be, ez nem az!", "Ez még mindig nem egy szám!", "Nem, ez még továbbra sem szám!", "Kezdem reménytelennek érezni a helyzetet...", "Nem, még mindig nem szám. Kicsit sok lett a pia?", "Szerintem hagyjuk, menj inkább táncolni!"]

function write_message_for_table()
{
    let table_num_field = document.getElementById("table_num");
    let table_message_field = document.getElementById("table_message");
    let table_num = parseInt(table_num_field.value);
    if(!isNaN(table_num))
    {
        if(table_num == 0)
        {
             table_message_field.innerHTML = "<p class=\"centered\">Köszönjük minden támogatásokat, amit ezen gyönyörű nap összehozásának érdekében tettetek. Csak annyit szeretnénk kérni tőletek, hogy érezzétek jól magatokat velünk ezen az estén!</p>";
        }
        else if(table_num == 1)
        {
            table_message_field.innerHTML = "<ul>" +
                                            "<li>Köszönjük a szerepléseteket a szertartások során. Most már letudtátok a feladatotokat, csak az maradt hátra, hogy élvezzétek az estét és érezzétek jól magatokat!</li>" + 
                                            "<li>Habár tudjuk, hogy a tánc és mulatozás nem éppen a kedvenc időtöltésetek, azért ha meggondoljátok magatok egy-két számra szívesen látunk mindenkit a parketten!</li>" + 
                                            "<li>Ha nyugodtabb körülményekre vágytok, akkor érdemes kinézni az udvarba megsimogatni a helyi kutyákat vagy lőni egy képet a polaroid kamerával az emlékkönyvünkbe!</li>" + 
                                            "<li>Mamának lehet nem a legoptimálisabb a svédasztal, segítsétek légyszi, nehogy amiatt maradjon le a jó falatokról, mert messze vannak!</li>" +
                                            "<li>Sajnos térerő nem sok van a tanyán, reméljük ez nem probléma a gyerekek telefonos játékainak.</li>" +
                                            "</ul>";
        }
        else if(table_num == 2)
        {
            table_message_field.innerHTML = "<ul>" + 
                                            "<li>Köszönjük mindenkinek a szereplést, akire rá lett ruházva ez a feladat! Most már csak a szórakozás maradt hátra!</li>" + 
                                            "<li>A gyerekeknek mindenképp javasoljuk a játszósarkot vagy a helyi kutyusokat az udvaron, ha már sok lenne nekik a benti hangulat.</li>" +
                                            "<li>Ezen kívül egy cigire és egy polaroid kép készítésére is tökéletesen alkalmas a kinti környezet!</li>" + 
                                            "<li>Ha nagymamának szüksége van valamire, segítsetek légyszi, nehogy azért maradjon le pár finom falatról vagy jó italról, mert messze van a svédasztal.</li>" +
                                            "<li>Legjobb tudásunk szerint van itt pár ember, aki szívesen megdolgoztatja a pultosokat egy kis sörcsapolással vagy fröccskeveréssel, ne hagyjátok őket túl sokat pihenni!</li>" + 
                                            "<li>A táncteret se hagyjátok üresen! Lizi mindenképp mutassa meg a társaságnak, hogy is kell ezt csinálni!</li>" + 
                                            "</ul>";
        }
        else if(table_num == 3)
        {
            table_message_field.innerHTML = "<ul>" + 
                                            "<li>Egy közös koszorúslányos képet mindenképp szívesen látnánk az emlékkönyvünkbe!</li>" + 
                                            "<li> A tánctéren vagy a bárpultnál fussunk párszor össze az este folyamán! Tudjuk, hogy vannak olyanok az asztalnál jó páran akiktől ezek nem állnak távol.</li>" + 
                                            "<li>Ha a zenétől nem vagytok elragadtatva, nyugodtan lehet számot kérni a DJ-től. Biztos szívesen játszik egy kis High School Musical-t is!</li>" + 
                                            "<li>Reméljük a hangulat nem okoz majd csalódást, különösen azoknak, akik még nem voltak lakodalmon, főleg nem magyaron!</li>" + 
                                            "</ul>";
        }
        else if(table_num == 4)
        {
            table_message_field.innerHTML = "<ul>" + 
                                            "<li>Ha Kriszti torka kezd száradni, akkor egy pálinkával mindenképp legyen megöntözve!</li>" + 
                                            "<li>Persze a kicsik se maradjanak szomjasak, üdítő is van bőven, még ha talán XIXO nincs is a kínálatban.</li>" + 
                                            "<li>A gyerekek számára ne feledkezzetek meg a játszósarokról, illetve kint az udvaron a helyi kutyák vagy a fénykép készítés az emlékkönyvbe is egy jó program lehet, ha már elég volt a buliból bent.</li>" + 
                                            "<li>Reméljük az ételek ízleni fognak, bár tudjuk, hogy bármennyire igyekeznek is a szakácsok Margit gulyásához akkor sem érhetnek fel!.</li>" + 
                                            "</ul>";
        }
        else if(table_num == 5)
        {
            table_message_field.innerHTML = "<ul>" + 
                                            "<li>A külföldi légiónak külön köszönet, hogy megjelent az eseményen!</li>" + 
                                            "<li>Legyetek szívesek nem belefulladni a medencébe. (Gondolatban szerintem tudjátok kire nézek.)</li>" + 
                                            "<li>A tánctéren is szeretnék majd látni embereket innen! Ha láttok embert az asztaloknál aki úgy néz ki, mint akinek kell egy kis bíztatás, nyugodtan meg lehet próbálni behúzni a parkettre. (Gondolatban még mindig ugyanoda nézek.)</li>" + 
                                            "<li>Ez nem olasz nyaralás, a sudokut és a fél tízes fekvést, ha lehet mára hanyagoljuk! (Most már máshova nézek.)</li>" + 
                                            "<li>A korlátlan italfogyasztás gazdasági megtérülésében is feltétlen számítok az asztalra!</li>" + 
                                            "<li>És talán a legfontosabb, a záróizmokat tartsuk feszesen! (Mindenkinek jó tanács, de van akitől különös figyelmet kérnék erre.)</li>" + 
                                            "</ul>";
        }
        else if(table_num == 6)
        {
            table_message_field.innerHTML = "<ul>" + 
                                            "<li>A sörcsapok kihasználatlanság miatti berozsdásodását elkerülendő kérlek gyakran hozassátok működésbe az eszközt, na persze csak azok, akikhez nem kell mentőt hívni, ha isznak belőle.</li>" + 
                                            "<li>A többiek pedig legyenek szívesek elfoglaltan tartani a többi pultos kollegát is!</li>" + 
                                            "<li>Ha már eleget támasztottátok a bárpultot, akkor a tánctérről se feledkezzetek meg! Egy kis kardiónak is tökéletes, azoknak akik dolgoznak rajta, hogy ledobjanak pár tíz kilót!</li>" + 
                                            "<li>Egyébként az udvar tökéletes környezet biztosít e-cigi, aikos, vagy épp három doboz Marlboro elszívására.</li>" + 
                                            "<li>Ha már kimentek az udvarra, akkor viszont kérlek mentsétek ki a medencéből ha valaki a szomszéd asztaltól éppen belefulladni készülne! Figyelmeztettem rá őket, hogy óvatosan, de na sose lehet tudni egyesekénél.</li>" + 
                                            "</ul>";
        }
        else if(table_num == 7)
        {
            table_message_field.innerHTML = "<ul>" + 
                                            "<li>Minden nyaraláson az első este szokott a legerősebb lenni, ezt az alkalmat pedig szeretném kérni, hogy tekintsük egy egy estés nyaralásnak!</li>" + 
                                            "<li>Az itteni pálinkát is érdemes megkóstolni, még ha Paliéhoz nem is érhet fel.</li>" + 
                                            "<li>A kicsiknek mindenképp javasoljuk a játszósarkot illetve az udvaron a helyi kutyusokat, ha már megunták az asztal környékét.</li>" + 
                                            "<li>Egy nagy családi képet szívesen megnéznénk tőletek az emlékkönyvünkbe! Na meg persze a csapat többi tagjával is együtt!</li>" + 
                                            "<li>A fröccs fogyasztásban is számítunk rátok! A homokhátságon is terem valamennyi jó szőlő, nem csak Egerben!</li>" + 
                                            "<li>Ha pedig a zenével lenne probléma, azt bármikor lehet kérni, illetve a házi DJ-nk is átveheti a terepet egy Bluetooth-os hangszóróval!</li>" + 
                                            "</ul>";
        }
        else if(table_num == 8)
        {
            table_message_field.innerHTML = "<ul>" + 
                                            "<li>Minden nyaraláson az első este szokott a legerősebb lenni, ezt az alkalmat pedig szeretném kérni, hogy tekintsük egy egy estés nyaralásnak!</li>" + 
                                            "<li>A rose borosüvegek megtizedelésében különösen számítunk az asztalnál ülőkre!</li>" + 
                                            "<li>Persze tudjuk, hogy van az asztalnál, akinek a sörcsap megdolgoztatása testhez állóbb. Reméljük a lagzis Dreher is fog olyan jól esni, mint egy Borsodi a DVTK-Stadion lelátóján! (Bár egy ilyen szezon után még lehet jobban is.)</li>" + 
                                            "<li>A tánctéren is várunk benneteket! Zsófiék esküvőjén már láttuk Kamillát is a bulizók között, reméljük azóta csak még inkább megjött hozzá a kedve!</li>" + 
                                            "<li>Családi és csapatos képeket szeretnénk majd tőletek is látni az emlékkönyvbe!</li>" + 
                                            "<li>A Jägerrel sem kell szerénykedni. Sajnos szappanos kinyomó itt nincs hozzá, de azért így is eléri a hatását.</li>" + 
                                            "</ul>";
        }
        else if(table_num == 9)
        {
            table_message_field.innerHTML = "<ul>" + 
                                            "<li>Minden nyaraláson az első este szokott a legerősebb lenni, ezt az alkalmat pedig szeretném kérni, hogy tekintsük egy egy estés nyaralásnak!</li>" + 
                                            "<li>A bárpultosok lefoglalásában különös tekintettel számítok a társaságra, jó lenne sok üres boros üveget és ritkán pihenő sörcsapot látni!</li>" + 
                                            "<li>A táncparketten is szívesen látnánk benneteket, eddig úgy tapasztaltam vannak az asztalnál akik nem idegenkednek a hangulat felrázásától!</li>" + 
                                            "<li>Ha pedig keveslitek az ABBA-t mindenképp adjátok a DJ tudtára.</li>" + 
                                            "<li>Pihenésképpen, ha egy közös csapatos képet is csináltok az emlékkönyvbe annak külön örülünk!</li>" + 
                                            "<li>Illetve a torta, sütik és fagyi is fogyjon, úgy tudjuk van aki szereti az édeset az asztalnál. De azért arra vigyázzunk, hogy sörivás rovására ne menjen!</li>" + 
                                            "</ul>";
        }
        else if(table_num == 10)
        {
            table_message_field.innerHTML = "<ul>" + 
                                            "<li>Köszönjük nektek a munkátokat, amit azért végeztek, hogy minden rendben menjen ezen a csodálatos napon!</li>" + 
                                            "<li>Bátran fogyasszatok az ételből is italból amennyit csak akartok! Mindenkire vonatkozik a korlátlan étel és italfogyasztás!</li>" + 
                                            "</ul>";
        }
        else
        {
            table_message_field.innerHTML = "<p class=\"centered\">Ilyen számú asztalunk nincsen!</p>"
        }
        fault_counter = 0;
    }
    else
    {
        table_message_field.innerHTML = "<p>" + fault_list[fault_counter] + "</p>";
        if(fault_counter < 5)
        {
            fault_counter++;
        }
    }
}