const questions = [
    // GRUP A: EMPRESES PROVEÃDORES
    {
        id: 1, group: "GRUP A: EMPRESES PROVEÃDORES (Cadena de subministrament)", subgroup: "A1. Dignitat Humana",
        text: "1. Quin percentatge de les empreses proveÃ¯dores de roba de treball i EPI certifica que la seua fabricaciÃ³ estÃ  lliure d'explotaciÃ³ laboral (ex. segell Fair Wear)?",
        options: [
            { label: "MÃ©s del 80% (10 pts)", value: "10" },
            { label: "Entre el 30% i el 80% (5 pts)", value: "5" },
            { label: "Menys del 30% o no se solÂ·licita cap certificaciÃ³ (0 pts)", value: "0" }
        ],
        recommendation: "Seria interessant requerir com a criteri obligatori en les properes licitacions d'EPIs i roba l'acreditaciÃ³ de segells lliures d'explotaciÃ³ laboral (com Fair Wear)."
    },
    {
        id: 2, group: "GRUP A: EMPRESES PROVEÃDORES (Cadena de subministrament)", subgroup: "A1. Dignitat Humana",
        text: "2. Existeix un protocol de recepciÃ³ de material que verifique que el personal repartidor treballa en condicions de seguretat i dignitat?",
        options: [
            { label: "SÃ­, es supervisa i hi ha un canal de denÃºncia davant l'empresa proveÃ¯dora (10 pts)", value: "10" },
            { label: "S'observa de manera informal (5 pts)", value: "5" },
            { label: "No es considera responsabilitat del centre (0 pts)", value: "0" }
        ],
        recommendation: "Podria resultar molt beneficiÃ³s establir un procediment acollidor i segur en consergeria que vetle pel tracte digne cap al personal repartidor."
    },
    {
        id: 3, group: "GRUP A: EMPRESES PROVEÃDORES (Cadena de subministrament)", subgroup: "A2. Solidaritat i JustÃ­cia",
        text: "3. Quin percentatge dels contractes de subministraments menors s'adjudica a xicotetes empreses locals (Cheste i comarca) davant de grans superfÃ­cies?",
        options: [
            { label: "MÃ©s del 60% (10 pts)", value: "10" },
            { label: "Entre el 20% i el 60% (5 pts)", value: "5" },
            { label: "Menys del 20% (0 pts)", value: "0" }
        ],
        recommendation: "Seria una gran empenta per al municipi intentar afavorir un poc mÃ©s les xicotetes empreses i comerÃ§os de la comarca a l'hora de formalitzar contractes menors."
    },
    {
        id: 4, group: "GRUP A: EMPRESES PROVEÃDORES (Cadena de subministrament)", subgroup: "A2. Solidaritat i JustÃ­cia",
        text: "4. Quin Ã©s el termini mitjÃ  de pagament a les empreses proveÃ¯dores des que la factura Ã©s conformada pel centre?",
        options: [
            { label: "Menys de 15 dies (10 pts)", value: "10" },
            { label: "Entre 15 i 30 dies (5 pts)", value: "5" },
            { label: "MÃ©s de 30 dies (0 pts)", value: "0" }
        ],
        recommendation: "Resultaria de molta ajuda optimitzar els passos administratius interns per intentar conformar les factures el mÃ©s rÃ pid possible i reduir l'espera de les empreses proveÃ¯dores."
    },
    {
        id: 5, group: "GRUP A: EMPRESES PROVEÃDORES (Cadena de subministrament)", subgroup: "A3. Sostenibilitat Mediambiental",
        text: "5. Quin percentatge dels subministraments de papereria i consumibles compta amb certificaciÃ³ ecolÃ²gica (FSC, PEFC o Ecolabel)?",
        options: [
            { label: "MÃ©s del 90% (10 pts)", value: "10" },
            { label: "Entre el 50% i el 90% (5 pts)", value: "5" },
            { label: "Menys del 50% (0 pts)", value: "0" }
        ],
        recommendation: "Us animem a solÂ·licitar que tota la nova papereria i el material fungible compte preferiblement amb alguna etiqueta mediambiental com l'Ecolabel o FSC."
    },
    {
        id: 6, group: "GRUP A: EMPRESES PROVEÃDORES (Cadena de subministrament)", subgroup: "A3. Sostenibilitat Mediambiental",
        text: "6. Es prioritza en les licitacions de maquinÃ ria per a tallers la compra d'equips amb la classificaciÃ³ energÃ¨tica mÃ©s alta disponible?",
        options: [
            { label: "Ã‰s un criteri amb un pes superior al 20% en la valoraciÃ³ (10 pts)", value: "10" },
            { label: "Es valora perÃ² tÃ© un pes secundari (5 pts)", value: "5" },
            { label: "No es puntua l'eficiÃ¨ncia energÃ¨tica (0 pts)", value: "0" }
        ],
        recommendation: "Seria un gran pas avant afegir puntuacions altes (per damunt del 20%) a aquelles ofertes que presenten equips amb major eficiÃ¨ncia energÃ¨tica per als tallers."
    },
    {
        id: 7, group: "GRUP A: EMPRESES PROVEÃDORES (Cadena de subministrament)", subgroup: "A4. TransparÃ¨ncia i ParticipaciÃ³ DemocrÃ tica",
        text: "7. Participen els departaments didÃ ctics en la redacciÃ³ tÃ¨cnica dels plecs per a assegurar la qualitat i l'Ã¨tica del material?",
        options: [
            { label: "Sempre, mitjanÃ§ant un procÃ©s formal i documentat (10 pts)", value: "10" },
            { label: "De vegades, de manera consultiva i informal (5 pts)", value: "5" },
            { label: "La selecciÃ³ es realitza de manera centralitzada per l'equip directiu juntament amb els departaments, sense criteris de participaciÃ³ oberta (0 pts)", value: "0" }
        ],
        recommendation: "Sempre Ã©s positiu buscar fÃ³rmules per involucrar activament els departaments didÃ ctics en la redacciÃ³ d'aquests plecs i formalitzar la seua opiniÃ³ qualificada."
    },
    {
        id: 8, group: "GRUP A: EMPRESES PROVEÃDORES (Cadena de subministrament)", subgroup: "A4. TransparÃ¨ncia i ParticipaciÃ³ DemocrÃ tica",
        text: "8. Ã‰s pÃºblic i accessible per a tot el personal del centre el llistat d'empreses proveÃ¯dores i l'import anual facturat per cadascuna?",
        options: [
            { label: "SÃ­, en una plataforma interna o tauler d'anuncis (10 pts)", value: "10" },
            { label: "NomÃ©s sota peticiÃ³ formal raonada (5 pts)", value: "5" },
            { label: "No Ã©s una informaciÃ³ accessible (0 pts)", value: "0" }
        ],
        recommendation: "Es podria valorar divulgar el llistat principal d'empreses proveÃ¯dores i la seua inversiÃ³ a la intranet del centre de manera anual per millorar la transparÃ¨ncia."
    },

    // GRUP B: ENTITATS PROPIETÃ€RIES I RECURSOS FINANCERS
    {
        id: 9, group: "GRUP B: ENTITATS PROPIETÃ€RIES I RECURSOS FINANCERS", subgroup: "B1. Dignitat Humana",
        text: "9. En quina mesura s'evita treballar amb entitats financeres que inverteixen en sectors no Ã¨tics (armament, combustibles fÃ²ssils)?",
        options: [
            { label: "El 100% dels fons estan en banca Ã¨tica o amb alts estÃ ndards de RSC (10 pts)", value: "10" },
            { label: "Es mantenen els comptes en banca tradicional perÃ² s'han solÂ·licitat informes d'Ã¨tica (5 pts)", value: "5" },
            { label: "Es treballa amb qualsevol entitat sense criteris Ã¨tics (0 pts)", value: "0" }
        ],
        recommendation: "Valdria la pena esbrinar o solÂ·licitar un canvi progressiu d'alguns comptes de gestiÃ³ del centre cap a iniciatives representatives de la Banca Ãˆtica."
    },
    {
        id: 10, group: "GRUP B: ENTITATS PROPIETÃ€RIES I RECURSOS FINANCERS", subgroup: "B1. Dignitat Humana",
        text: "10. Com es garanteix l'equitat en el repartiment de les dietes i ajudes de projectes europeus (Erasmus+)?",
        options: [
            { label: "Existeix un barem pÃºblic basat en necessitats i mÃ¨rits, revisat pel Consell Escolar (10 pts)", value: "10" },
            { label: "El barem Ã©s conegut perÃ² no s'ha sotmÃ©s a revisiÃ³ participativa (5 pts)", value: "5" },
            { label: "El repartiment es fa seguint criteris tancats de l'equip de coordinaciÃ³ (0 pts)", value: "0" }
        ],
        recommendation: "Resultaria molt adient sotmetre els criteris de repartiment i barems d'accÃ©s als fons Erasmus a l'aprovaciÃ³ clara del Consell Escolar."
    },
    {
        id: 11, group: "GRUP B: ENTITATS PROPIETÃ€RIES I RECURSOS FINANCERS", subgroup: "B2. Solidaritat i JustÃ­cia",
        text: "11. Quin percentatge del pressupost de lliure gestiÃ³ es reinverteix en fons d'emergÃ¨ncia o beques prÃ²pies per a l'alumnat amb dificultats?",
        options: [
            { label: "Existeix una partida especÃ­fica superior al 3% (10 pts)", value: "10" },
            { label: "S'ajuda puntualment segons el cas (5 pts)", value: "5" },
            { label: "Els fons s'utilitzen exclusivament per a despeses de funcionament ordinari (0 pts)", value: "0" }
        ],
        recommendation: "Seria una idea solidÃ ria meravellosa poder reservar una petita bossa dins del pressupost exclusivament dedicada a donar suport o beques d'emergÃ¨ncia."
    },
    {
        id: 12, group: "GRUP B: ENTITATS PROPIETÃ€RIES I RECURSOS FINANCERS", subgroup: "B2. Solidaritat i JustÃ­cia",
        text: "12. Com es distribueixen els recursos entre les diferents famÃ­lies professionals segons les seues necessitats d'equipament?",
        options: [
            { label: "Per un pla d'inversiÃ³ plurianual consensuat que prioritza les carÃ¨ncies tÃ¨cniques (10 pts)", value: "10" },
            { label: "Per repartiment lineal segons el nombre de l'alumnat (5 pts)", value: "5" },
            { label: "MitjanÃ§ant discrecionalitat administrativa segons la disponibilitat del moment (0 pts)", value: "0" }
        ],
        recommendation: "MÃ©s que un repartiment idÃ¨ntic o aleatori, seria fantÃ stic establir una trajectÃ²ria compartida per equipar progressivament a aquells departaments amb mÃ©s faltes."
    },
    {
        id: 13, group: "GRUP B: ENTITATS PROPIETÃ€RIES I RECURSOS FINANCERS", subgroup: "B3. Sostenibilitat Mediambiental",
        text: "13. Es compta amb un pla d'inversiÃ³ per a la millora de l'aÃ¯llament tÃ¨rmic o la instalÂ·laciÃ³ d'energies renovables al centre?",
        options: [
            { label: "SÃ­, amb fons assignats i terminis d'execuciÃ³ (10 pts)", value: "10" },
            { label: "EstÃ  solÂ·licitat a Conselleria perÃ² no hi ha inversiÃ³ prÃ²pia (5 pts)", value: "5" },
            { label: "No es contempla com una prioritat d'inversiÃ³ (0 pts)", value: "0" }
        ],
        recommendation: "Animem a dissenyar algunes accions a curt termini o destinar xicotets romanents cap a millores prÃ ctiques d'aÃ¯llament o energia renovable al propi edifici."
    },
    {
        id: 14, group: "GRUP B: ENTITATS PROPIETÃ€RIES I RECURSOS FINANCERS", subgroup: "B3. Sostenibilitat Mediambiental",
        text: "14. Quina part del pressupost de manteniment es destina a la reparaciÃ³ d'equips en lloc de la substituciÃ³ directa per equips nous?",
        options: [
            { label: "MÃ©s del 30%, prioritzant la reparabilitat (10 pts)", value: "10" },
            { label: "Entre el 10% i el 30% (5 pts)", value: "5" },
            { label: "Menys del 10%, es tendeix a la substituciÃ³ per nous models (0 pts)", value: "0" }
        ],
        recommendation: "Fomentar un canvi cultural als tallers apostant fermament per invertir temps i diners a reparar en lloc de substituir immediatament per maquinÃ ria nova."
    },
    {
        id: 15, group: "GRUP B: ENTITATS PROPIETÃ€RIES I RECURSOS FINANCERS", subgroup: "B4. Transparencia i ParticipaciÃ³ DemocrÃ tica",
        text: "15. Quantes sessions informatives obertes a tota la comunitat educativa es realitzen sobre l'execuciÃ³ del Projecte de GestiÃ³?",
        options: [
            { label: "Almenys dues sessions (inici i final de curs) (10 pts)", value: "10" },
            { label: "Una sessiÃ³ informativa (5 pts)", value: "5" },
            { label: "Cap, la informaciÃ³ es limita als Ã²rgans oficials (0 pts)", value: "0" }
        ],
        recommendation: "Obrir aquestes presentacions comptables a tot el Claustre en una trobada distesa de principi o final de curs resulta sempre un pas decisiu en termes de confianÃ§a."
    },
    {
        id: 16, group: "GRUP B: ENTITATS PROPIETÃ€RIES I RECURSOS FINANCERS", subgroup: "B4. Transparencia i ParticipaciÃ³ DemocrÃ tica",
        text: "16. Existeix un mecanisme perquÃ¨ el personal puga proposar inversions en la millora de la convivÃ¨ncia o infraestructures del centre?",
        options: [
            { label: "SÃ­, i s'han executat propostes de la plantilla aquest curs (10 pts)", value: "10" },
            { label: "Existeix el canal perÃ² no s'ha materialitzat cap proposta (5 pts)", value: "5" },
            { label: "No existeix cap canal de proposta pressupostÃ ria (0 pts)", value: "0" }
        ],
        recommendation: "Es podria implantar un format participatiu on cadascÃº puga aportar la seua visiÃ³ per invertir i millorar de forma creativa certs espais colÂ·lectius."
    },

    // GRUP C: PERSONAL DEL CENTRE
    {
        id: 17, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i InterÃ­)", subgroup: "C1. Dignitat Humana",
        text: "17. Brecha salarial: Quina Ã©s la rÃ tio de diferÃ¨ncia salarial entre el salari net mÃ©s alt del centre i el salari mÃ©s baix (personal de neteja o PAS inicial)?",
        options: [
            { label: "Menys d'1:3 (10 pts)", value: "10" },
            { label: "Entre 1:3 i 1:5 (5 pts)", value: "5" },
            { label: "MÃ©s d'1:5 (0 pts)", value: "0" }
        ],
        recommendation: "Explorar formes de compensar o intentar encurtir aquestes inevitables minses diferÃ¨ncies mitjanÃ§ant ajudes socials o revisant les posicions inferiors."
    },
    {
        id: 18, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i InterÃ­)", subgroup: "C1. Dignitat Humana",
        text: "18. Pla d'acollida: Existeix un protocol d'acollida per al personal (docent, expert o interÃ­) que s'incorpora en setembre o a meitat de curs?",
        options: [
            { label: "SÃ­, inclou acompanyament per un/a mentor/a i guia d'integraciÃ³ (10 pts)", value: "10" },
            { label: "Es lliura una guia bÃ sica de funcionament de manera administrativa (5 pts)", value: "5" },
            { label: "L'acollida Ã©s informal i depÃ©n de la bona voluntat dels companys i companyes (0 pts)", value: "0" }
        ],
        recommendation: "Seria un detall inoblidable rebre la nova gent incorporada fora de termini amb una figura de companyia, un programa d'entrada i documentaciÃ³ digital clara."
    },
    {
        id: 19, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i InterÃ­)", subgroup: "C2. Solidaritat i JustÃ­cia",
        text: "19. Personal Expert i InterÃ­: Es garanteix el seu accÃ©s a les mateixes hores de formaciÃ³ i participaciÃ³ en projectes de centre que el personal funcionari?",
        options: [
            { label: "Paritat total documentada en el pla de formaciÃ³ (10 pts)", value: "10" },
            { label: "Tenen accÃ©s perÃ² no es facilita activament la seua participaciÃ³ (5 pts)", value: "5" },
            { label: "La seua participaciÃ³ Ã©s molt limitada per la seua condiciÃ³ contractual (0 pts)", value: "0" }
        ],
        recommendation: "Animar actÃ­vament al personal sense plaÃ§a fixa o personal expert a sumar-se constantment a accions formatives perquÃ¨ hi ha un innegable creixement conjunt."
    },
    {
        id: 20, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i InterÃ­)", subgroup: "C2. Solidaritat i JustÃ­cia",
        text: "20. Fons Europeus i d'InnovaciÃ³: Com es reparteixen els fons addicionals per a la coordinaciÃ³ d'Erasmus+ o projectes d'innovaciÃ³?",
        options: [
            { label: "MitjanÃ§ant convocatÃ²ria pÃºblica interna amb criteris transparents i rotaciÃ³ de cÃ rrecs (10 pts)", value: "10" },
            { label: "Es reparteixen segons la cÃ rrega de treball prÃ¨viament assignada (5 pts)", value: "5" },
            { label: "La selecciÃ³ de les persones beneficiÃ ries no segueix un criteri pÃºblic (0 pts)", value: "0" }
        ],
        recommendation: "Adoptar un to mÃ©s rotatiu a les oportunitats de coordinaciÃ³ internacional ens enriquirÃ  com a Claustre obrint opcions i reconeixent la flexibilitat de perfils."
    },
    {
        id: 21, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i InterÃ­)", subgroup: "C3. Sostenibilitat Mediambiental",
        text: "21. Quin percentatge de la plantilla (docent i no docent) utilitza mitjans de transport colÂ·lectius (autobÃºs, tren) o cotxe compartit?",
        options: [
            { label: "MÃ©s del 40% de la plantilla (10 pts)", value: "10" },
            { label: "Entre el 15% i el 40% (5 pts)", value: "5" },
            { label: "Menys del 15% (0 pts)", value: "0" }
        ],
        recommendation: "Generar reptes saludables en els quals puguem oferir recompenses simpÃ tiques pel fet de compartir cotxe per eixir rumb a les nostres instalÂ·lacions freqÃ¼entment."
    },
    {
        id: 22, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i InterÃ­)", subgroup: "C3. Sostenibilitat Mediambiental",
        text: "22. S'han realitzat accions formatives sobre 'Tallers Sostenibles' o gestiÃ³ de residus per a tot el personal aquest curs?",
        options: [
            { label: "SÃ­, amb mÃ©s d'una sessiÃ³ de participaciÃ³ massiva (10 pts)", value: "10" },
            { label: "S'ha fet una xarrada o enviat informaciÃ³ per correu (5 pts)", value: "5" },
            { label: "No s'ha realitzat cap acciÃ³ especÃ­fica (0 pts)", value: "0" }
        ],
        recommendation: "Invertir una mica d'esforÃ§ a preparar una jornada lÃºdica l'any per refrescar la correcta gestiÃ³ tÃ¨cnica dels residus especÃ­fics pot fer meravelles."
    },
    {
        id: 23, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i InterÃ­)", subgroup: "C4. TransparÃ¨ncia i ParticipaciÃ³ DemocrÃ tica",
        text: "23. El personal del centre tÃ© accÃ©s a les actes de les reunions dels Ã²rgans de govern i de les comissions de treball en format digital?",
        options: [
            { label: "SÃ­, en un repositori compartit i actualitzat (10 pts)", value: "10" },
            { label: "S'envien per correu nomÃ©s les que afecten directament (5 pts)", value: "5" },
            { label: "Cal solÂ·licitar-les formalment per a consultar-les (0 pts)", value: "0" }
        ],
        recommendation: "Es podria valorar crear un nÃºvol o secciÃ³ asÃ­ncrona oberta on tot el mÃ³n puga llegir com i exactament en termes de resoluciÃ³ quÃ¨ s'ha dictat a les actes."
    },
    {
        id: 24, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i InterÃ­)", subgroup: "C4. TransparÃ¨ncia i ParticipaciÃ³ DemocrÃ tica",
        text: "24. Quin percentatge del personal participa en comissions de treball voluntÃ ries (CoordinaciÃ³ d'Igualtat, Sostenibilitat, etc.)?",
        options: [
            { label: "MÃ©s del 25% de la plantilla (10 pts)", value: "10" },
            { label: "Entre el 10% i el 25% (5 pts)", value: "5" },
            { label: "Menys del 10% (0 pts)", value: "0" }
        ],
        recommendation: "Busquem idees que motiven les persones atorgant un valor emocional o llibertat de treball per veure crÃ¨ixer la rati colÂ·laboradora per damunt d'un 25%."
    },

    // GRUP D: ALUMNAT I EMPRESES DE PRÃ€CTIQUES
    {
        id: 25, group: "GRUP D: ALUMNAT I EMPRESES DE PRÃ€CTIQUES", subgroup: "D1. Dignitat Humana",
        text: "25. Quin percentatge de les incidÃ¨ncies d'alumnat es resolen mitjanÃ§ant processos de mediaciÃ³ abans de passar al rÃ¨gim disciplinari?",
        options: [
            { label: "MÃ©s del 75% (10 pts)", value: "10" },
            { label: "Entre el 40% i el 75% (5 pts)", value: "5" },
            { label: "Menys del 40%, predomina la sanciÃ³ directa (0 pts)", value: "0" }
        ],
        recommendation: "Potser seria valuÃ³s crear figures oficials mediadores per minimitzar gradualment les expulsions en favor d'acords comunitaris reparadors a classe."
    },
    {
        id: 26, group: "GRUP D: ALUMNAT I EMPRESES DE PRÃ€CTIQUES", subgroup: "D1. Dignitat Humana",
        text: "26. Existeixen protocols actius i coneguts per l'alumnat per a denunciar possibles casos d'assetjament o discriminaciÃ³ dins del centre?",
        options: [
            { label: "SÃ­, amb formaciÃ³ especÃ­fica i canals anÃ²nims i segurs (10 pts)", value: "10" },
            { label: "Existeix el protocol perÃ² no s'ha difÃ³s prou entre l'alumnat (5 pts)", value: "5" },
            { label: "NomÃ©s s'actua quan el cas ja ha esclatat (0 pts)", value: "0" }
        ],
        recommendation: "Es podria valorar organitzar proactivament bÃºsties anÃ²nimes molt assequibles als corredors en defensa prÃ¨via enfront a qualsevol abÃºs acompanyat de difusiÃ³."
    },
    {
        id: 27, group: "GRUP D: ALUMNAT I EMPRESES DE PRÃ€CTIQUES", subgroup: "D2. Solidaritat i JustÃ­cia",
        text: "27. Les empreses on l'alumnat realitza les prÃ ctiques (FCT) se seleccionen sota criteris de responsabilitat social i Ã¨tica laboral?",
        options: [
            { label: "SÃ­, es realitza un cribratge Ã¨tic previ als convenis (10 pts)", value: "10" },
            { label: "Es revisen si hi ha queixes, perÃ² no Ã©s un criteri d'elecciÃ³ inicial (5 pts)", value: "5" },
            { label: "S'accepta qualsevol empresa amb capacitat tÃ¨cnica (0 pts)", value: "0" }
        ],
        recommendation: "Seria interessant acostar-nos subtilment el tema RSC cap a les empreses conveniades afegint recomanacions amistoses als nostres trÃ mits informals."
    },
    {
        id: 28, group: "GRUP D: ALUMNAT I EMPRESES DE PRÃ€CTIQUES", subgroup: "D2. Solidaritat i JustÃ­cia",
        text: "28. Es fomenta l'ajuda entre iguals mitjanÃ§ant programes d'alumnat-tutor o suport a l'estudiant amb dificultats d'aprenentatge?",
        options: [
            { label: "SÃ­, hi ha un programa formal amb reconeixement (10 pts)", value: "10" },
            { label: "Es realitza de manera informal en alguns departaments (5 pts)", value: "5" },
            { label: "No es fomenta activament (0 pts)", value: "0" }
        ],
        recommendation: "Us proposem activar 'Germans Majors': un bonic reconeixement o puntatge per a eixos joves excelÂ·lents de prÃ ctiques que apadrinen la gent debutant als tallers."
    },
    {
        id: 29, group: "GRUP D: ALUMNAT I EMPRESES DE PRÃ€CTIQUES", subgroup: "D3. Sostenibilitat Mediambiental",
        text: "29. Residu Zero en Tallers: Quines mesures s'apliquen per a reduir el consum de materials fungibles en les prÃ ctiques de l'alumnat?",
        options: [
            { label: "Ãšs obligatori de materials recuperats i auditories de residus per aula (10 pts)", value: "10" },
            { label: "SeparaciÃ³ bÃ sica de residus perÃ² sense pla de reducciÃ³ de consum (5 pts)", value: "5" },
            { label: "No hi ha un control de l'impacte ambiental del material gastat (0 pts)", value: "0" }
        ],
        recommendation: "LlanÃ§ar microreptes verds a classe, invitant tothom a usar restes aprofitables sota la fita setmanal de prÃ ctiques excelÂ·lents a 'Residu Zero'."
    },
    {
        id: 30, group: "GRUP D: ALUMNAT I EMPRESES DE PRÃ€CTIQUES", subgroup: "D3. Sostenibilitat Mediambiental",
        text: "30. S'apliquen criteris de 'subministrament digital' per a evitar la impressiÃ³ de manuals i exÃ mens en format paper?",
        options: [
            { label: "El 100% de la documentaciÃ³ tÃ¨cnica es gestiona digitalment (10 pts)", value: "10" },
            { label: "S'ha reduÃ¯t significativament perÃ² encara es fan moltes fotocÃ²pies (5 pts)", value: "5" },
            { label: "El format paper continua sent el suport principal (0 pts)", value: "0" }
        ],
        recommendation: "Resultaria excelÂ·lent comenÃ§ar ja a establir mesures fermes i graduals on tot disseny i dossier avaluatiu emigrin forÃ§osament i digital a dispositius evitant el clÃ ssic follet documentat."
    },
    {
        id: 31, group: "GRUP D: ALUMNAT I EMPRESES DE PRÃ€CTIQUES", subgroup: "D4. TransparÃ¨ncia i ParticipaciÃ³ DemocrÃ tica",
        text: "31. ComissiÃ³ de ConvivÃ¨ncia: TÃ© l'alumnat delegat capacitat real per a proposar i votar canvis en les normes del centre?",
        options: [
            { label: "SÃ­, i s'han modificat normes a proposta de l'alumnat aquest curs (10 pts)", value: "10" },
            { label: "Tenen veu perÃ² la seua capacitat d'influÃ¨ncia Ã©s escassa (5 pts)", value: "5" },
            { label: "La participaciÃ³ Ã©s merament informativa (0 pts)", value: "0" }
        ],
        recommendation: "Poder assegurar eixa cadira d'alumne com a vot decisiu sobre convivÃ¨ncia i inclÃºs normes enxarparia en grau considerable l'empoderament global."
    },
    {
        id: 32, group: "GRUP D: ALUMNAT I EMPRESES DE PRÃ€CTIQUES", subgroup: "D4. TransparÃ¨ncia i ParticipaciÃ³ DemocrÃ tica",
        text: "32. Iniciatives de Millora: Existeix un pressupost participatiu gestionat directament per l'alumnat per a millores en les zones comunes?",
        options: [
            { label: "SÃ­, amb una partida assignada i gestiÃ³ autÃ²noma de l'alumnat (10 pts)", value: "10" },
            { label: "S'escolten les seues propostes perÃ² la decisiÃ³ final i el pressupost sÃ³n tancats (5 pts)", value: "5" },
            { label: "No hi ha pressupost destinat a propostes de l'alumnat (0 pts)", value: "0" }
        ],
        recommendation: "Fer un vot sobre una petita part monetÃ ria per veure si desitgen millorar espais exteriors de manera integral donarÃ  grans sensacions constructores d'orgull de comunitat."
    },

    // GRUP E: ENTORN SOCIAL (Cheste i FamÃ­lies)
    {
        id: 33, group: "GRUP E: ENTORN SOCIAL (Cheste i FamÃ­lies)", subgroup: "E1. Dignidad Humana",
        text: "33. Quin percentatge de les instalÂ·lacions del centre estan obertes per a l'Ãºs de les associacions locals de Cheste fora de l'horari lectiu?",
        options: [
            { label: "MÃ©s del 50% de les instalÂ·lacions disponibles (10 pts)", value: "10" },
            { label: "Ãšs molt puntual de sales d'actes o espais concrets (5 pts)", value: "5" },
            { label: "El centre estÃ  tancat a l'Ãºs ciutadÃ  (0 pts)", value: "0" }
        ],
        recommendation: "Seria molt agraÃ¯t per part de la poblaciÃ³ que s'obriren parcialment pistes i algunes infraestructures com a uniÃ³ amistosa formativa-local fora de dies lectius."
    },
    {
        id: 34, group: "GRUP E: ENTORN SOCIAL (Cheste i FamÃ­lies)", subgroup: "E1. Dignidad Humana",
        text: "34. Es realitzen accions especÃ­fiques per a incloure les famÃ­lies de localitats llunyanes en la vida del centre (reunions online, canals de participaciÃ³)?",
        options: [
            { label: "SÃ­, es garanteix la participaciÃ³ hÃ­brida en totes les sessions (10 pts)", value: "10" },
            { label: "S'ofereixen algunes facilitats digitals perÃ² no de manera sistemÃ tica (5 pts)", value: "5" },
            { label: "La comunicaciÃ³ amb les famÃ­lies Ã©s unidireccional i presencial (0 pts)", value: "0" }
        ],
        recommendation: "Sempre sumarem mÃ©s suport familiar posant al seu abast reunions mixtes com a un repte consolidat per protegir la vinculaciÃ³ independentment dels desplaÃ§aments llunyans."
    },
    {
        id: 35, group: "GRUP E: ENTORN SOCIAL (Cheste i FamÃ­lies)", subgroup: "E2. Solidaritat i JustÃ­cia",
        text: "35. Es realitzen projectes d'Aprenentatge-Servei (ApS) on l'alumnat aplique els seus coneixements tÃ¨cnics per a resoldre necessitats de Cheste?",
        options: [
            { label: "MÃ©s de 3 projectes anuals amb impacte social directe (10 pts)", value: "10" },
            { label: "1 projecte puntual a l'any (5 pts)", value: "5" },
            { label: "No es realitzen projectes vinculats a l'entorn social (0 pts)", value: "0" }
        ],
        recommendation: "Una magnÃ­fica meta a llarg termini per als tutors pot ser planificar xicotets actes d'Ajuda SolidÃ ria com un requeriment tÃ¨cnic formatiu real a l'entorn veÃ¯nal de Cheste."
    },
    {
        id: 36, group: "GRUP E: ENTORN SOCIAL (Cheste i FamÃ­lies)", subgroup: "E2. Solidaritat i JustÃ­cia",
        text: "36. Existeix un programa de donaciÃ³ o prÃ©stec de maquinÃ ria i material descatalogat a entitats socials o escoles amb menys recursos?",
        options: [
            { label: "SÃ­, amb un registre pÃºblic de donacions anual (10 pts)", value: "10" },
            { label: "Es fa puntualment quan hi ha una peticiÃ³ externa (5 pts)", value: "5" },
            { label: "El material que ja no s'usa s'acumula o es llanÃ§a (0 pts)", value: "0" }
        ],
        recommendation: "Resultaria especial per exemple teixir xarxes humanitÃ ries preparant aquells antics ordinadors o mobles per anar a entitats colÂ·laborants mÃ©s humils del voltant."
    },
    {
        id: 37, group: "GRUP E: ENTORN SOCIAL (Cheste i FamÃ­lies)", subgroup: "E3. Sostenibilidad Medioambiental",
        text: "37. Mobilitat Sostenible: El centre ha gestionat amb les autoritats la millora de la freqÃ¼Ã¨ncia d'autobusos o trens per a reduir l'Ãºs del cotxe?",
        options: [
            { label: "SÃ­, hi ha una colÂ·laboraciÃ³ activa i millores aconseguides (10 pts)", value: "10" },
            { label: "S'ha fet alguna peticiÃ³ formal perÃ² sense seguiment (5 pts)", value: "5" },
            { label: "No s'ha realitzat cap gestiÃ³ en matÃ¨ria de transport pÃºblic (0 pts)", value: "0" }
        ],
        recommendation: "Us animem a seguir sumant pressions amigables administratives des del Consistori perquÃ¨ facin la connexiÃ³ per tren i bus del colÂ·lectiu jove tan inqÃ¼estionable com siga possible."
    },
    {
        id: 38, group: "GRUP E: ENTORN SOCIAL (Cheste i FamÃ­lies)", subgroup: "E3. Sostenibilidad Medioambiental",
        text: "38. Biodiversitat i Entorn: Es mantenen les zones exteriors del centre amb criteris de jardineria sostenible (plantes autÃ²ctones, estalvi d'aigua)?",
        options: [
            { label: "SÃ­, Ã©s un espai de biodiversitat gestionat de manera ecolÃ²gica (10 pts)", value: "10" },
            { label: "S'utilitzen criteris bÃ sics de manteniment perÃ² sense enfocament ecolÃ²gic (5 pts)", value: "5" },
            { label: "Zones exteriors poc cuidades o pavimentades majoritÃ riament (0 pts)", value: "0" }
        ],
        recommendation: "Un excelÂ·lent projecte podria ser reformar l'estÃ¨tica mediambiental envoltada creant progressivament patis mÃ©s amables amb bosquets o racons d'espÃ¨cies d'ombra natural mediterrÃ nia."
    },
    {
        id: 39, group: "GRUP E: ENTORN SOCIAL (Cheste i FamÃ­lies)", subgroup: "E4. TransparÃ¨ncia i ParticipaciÃ³ DemocrÃ tica",
        text: "39. S'elabora una memÃ²ria anual pÃºblica que explique a la ciutadania de Cheste l'impacte social i ambiental del centre?",
        options: [
            { label: "SÃ­, es publica i es presenta en un acte obert al poble (10 pts)", value: "10" },
            { label: "Es publica en la web perÃ² Ã©s una memÃ²ria estrictament acadÃ¨mica (5 pts)", value: "5" },
            { label: "No es comunica l'impacte social del centre (0 pts)", value: "0" }
        ],
        recommendation: "Podria marcar la diferÃ¨ncia preparar un simple resum o trÃ­ptic amb el nostre 'BalanÃ§' que fora un esdeveniment orgullÃ³s d'ensenyar socialment la nostra aportaciÃ³ colÂ·lectiva."
    },
    {
        id: 40, group: "GRUP E: ENTORN SOCIAL (Cheste i FamÃ­lies)", subgroup: "E4. TransparÃ¨ncia i ParticipaciÃ³ DemocrÃ tica",
        text: "40. ParticipaciÃ³ en el Poble: El centre participa de manera activa en els consells de ciutadania o fÃ²rums de decisiÃ³ del municipi de Cheste?",
        options: [
            { label: "PresÃ¨ncia activa i colÂ·laborativa en la vida polÃ­tica i social del poble (10 pts)", value: "10" },
            { label: "ParticipaciÃ³ puntual en festes o esdeveniments comercials (5 pts)", value: "5" },
            { label: "El centre funciona de manera aÃ¯llada de la gestiÃ³ municipal (0 pts)", value: "0" }
        ],
        recommendation: "Seria una idea integrativa encisadora aconseguir colÂ·laboraciÃ³ garantint permanentment per al nostre alumnat d'FP posicions o llibertat creativa clau dintre els Ã²rgans de la societat ciutadana."
    }
];
// Estat de l'aplicaciÃ³
let currentQuestionIndex = 0;
let answers = {}; 

function saveState() {
    localStorage.setItem('ecoAuditoriaState', JSON.stringify({
        answers: answers,
        currentQuestionIndex: currentQuestionIndex
    }));
}

// Elements del DOM
const welcomeView = document.getElementById('welcome-view');
const auditView = document.getElementById('audit-view');
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');

// InicialitzaciÃ³
document.addEventListener('DOMContentLoaded', () => {
    // Comprovar si hi ha sessiÃ³ guardada al localstorage
    const savedStateStr = localStorage.getItem('ecoAuditoriaState');
    if (savedStateStr) {
        const resumeContainer = document.getElementById('resume-container');
        const resumeBtn = document.getElementById('resume-btn');
        if (resumeContainer && resumeBtn) {
            resumeContainer.classList.remove('hidden');
            resumeBtn.addEventListener('click', () => {
                const savedState = JSON.parse(savedStateStr);
                answers = savedState.answers || {};
                currentQuestionIndex = savedState.currentQuestionIndex || 0;
                startAudit();
            });
        }
    }

    // Afegir aleatorietat a les opcions de cada pregunta una sola vegada a l'inici
    questions.forEach(q => {
        for (let i = q.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
        }
    });

    // Esdeveniment d'inici
    startBtn.addEventListener('click', startAudit);
    
    // Esdeveniments de navegaciÃ³
    nextBtn.addEventListener('click', () => navigate(1));
    prevBtn.addEventListener('click', () => navigate(-1));
    finishBtn.addEventListener('click', finishAudit);
});

function startAudit() {
    welcomeView.classList.add('fade-out');
    setTimeout(() => {
        welcomeView.classList.add('hidden');
        auditView.classList.remove('hidden');
        setTimeout(() => {
            auditView.classList.remove('opacity-0', 'scale-95');
            auditView.classList.add('opacity-100', 'scale-100');
            renderQuestion();
        }, 50);
    }, 400);
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    
    progressText.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    const percent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${percent}%`;

    questionContainer.innerHTML = '';
    
    // Mostrar Grup i Subgrup
    const groupLabel = document.createElement('p');
    groupLabel.className = "text-sm font-bold text-cheste-red tracking-wide uppercase mb-1 fade-in";
    groupLabel.textContent = q.group;
    questionContainer.appendChild(groupLabel);

    const subgroupLabel = document.createElement('p');
    subgroupLabel.className = "text-md font-semibold text-gray-500 mb-4 fade-in";
    subgroupLabel.textContent = q.subgroup;
    questionContainer.appendChild(subgroupLabel);

    const titleObj = document.createElement('h4');
    titleObj.className = "text-2xl text-gray-800 font-bold mb-6 leading-snug fade-in";
    titleObj.textContent = q.text;
    questionContainer.appendChild(titleObj);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = "space-y-4 fade-in";
    optionsContainer.style.animationDelay = "0.1s";

    q.options.forEach((opt, index) => {
        const labelEl = document.createElement('label');
        labelEl.className = "custom-radio-container block";
        
        const inputEl = document.createElement('input');
        inputEl.type = "radio";
        inputEl.name = `question_${q.id}`;
        inputEl.value = opt.value;
        inputEl.className = "peer sr-only";
        
        if (answers[q.id] === opt.value) {
            inputEl.checked = true;
        }

        const panelEl = document.createElement('div');
        panelEl.className = "flex items-center p-4 border-2 border-gray-100 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200";
        
        const radioCircle = document.createElement('div');
        radioCircle.className = "w-6 h-6 flex-shrink-0 mr-4 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white";
        
        const innerDot = document.createElement('div');
        innerDot.innerHTML = `<svg class="custom-radio-icon w-4 h-4 text-cheste-red" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`;
        radioCircle.appendChild(innerDot);

        const textSpan = document.createElement('span');
        textSpan.className = "text-gray-700 font-medium text-lg";
        // Eliminar "(X pts)" del text que veu l'usuari
        textSpan.textContent = opt.label.replace(/\s*\(\d+\s*pts\)/g, '');

        inputEl.addEventListener('change', (e) => {
            answers[q.id] = e.target.value;
            saveState(); // Guardem persistÃ¨ncia
            updateButtons();
        });

        panelEl.appendChild(radioCircle);
        panelEl.appendChild(textSpan);
        labelEl.appendChild(inputEl);
        labelEl.appendChild(panelEl);

        optionsContainer.appendChild(labelEl);
    });

    questionContainer.appendChild(optionsContainer);
    
    updateButtons();
}

function updateButtons() {
    const q = questions[currentQuestionIndex];
    const hasAnswer = answers[q.id] !== undefined;

    if (currentQuestionIndex === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
        finishBtn.disabled = !hasAnswer;
        if (!hasAnswer) {
            finishBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            finishBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    } else {
        finishBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        nextBtn.disabled = !hasAnswer;
        if (!hasAnswer) {
            nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }
}

function navigate(direction) {
    questionContainer.classList.add('fade-out');
    setTimeout(() => {
        currentQuestionIndex += direction;
        saveState(); // Guardem persistÃ¨ncia de navegaciÃ³
        questionContainer.classList.remove('fade-out');
        renderQuestion();
    }, 300);
}

function finishAudit() {
    questionContainer.innerHTML = '';
    progressText.textContent = "Completat";
    progressBar.classList.add('bg-green-500');
    progressBar.classList.remove('from-cheste-red', 'to-cheste-red-light');
    
    prevBtn.classList.add('hidden');
    finishBtn.classList.add('hidden');

    // Netejar la sessiÃ³ guardada en acabar
    localStorage.removeItem('ecoAuditoriaState');

    let totalScore = 0;
    const scoresByGroup = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0 };

    for (let currentId in answers) {
        const val = parseInt(answers[currentId]);
        totalScore += val;
        
        const q = questions.find(q => q.id == currentId);
        if (q && q.group.includes('GRUP A')) scoresByGroup['A'] += val;
        if (q && q.group.includes('GRUP B')) scoresByGroup['B'] += val;
        if (q && q.group.includes('GRUP C')) scoresByGroup['C'] += val;
        if (q && q.group.includes('GRUP D')) scoresByGroup['D'] += val;
        if (q && q.group.includes('GRUP E')) scoresByGroup['E'] += val;
    }
    const maxScore = questions.length * 10;
    const percentage = ((totalScore / maxScore) * 100).toFixed(1);

    const resultDiv = document.createElement('div');
    resultDiv.className = "text-center fade-in w-full max-w-2xl mx-auto";
    resultDiv.innerHTML = `
        <div class="inline-block p-4 rounded-full bg-green-50 text-green-600 mb-6 shadow-sm">
            <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <h3 class="text-3xl font-extrabold text-gray-900 mb-2">Moltes grÃ cies!</h3>
        <p class="text-xl font-bold text-cheste-red mb-4">PuntuaciÃ³ obtinguda: ${totalScore} / ${maxScore} pts (${percentage}%)</p>
        <p class="text-lg text-gray-600 mb-8">L'auditoria s'ha completat de manera satisfactÃ²ria segons la Matriu del BÃ© ComÃº 5.0 adaptada al CIPFP Cheste. Aquests resultats serviran per construir un centre mÃ©s Ã¨tic, sostenible i solidari.</p>
        
        <div class="relative w-full aspect-square md:aspect-video mb-8">
            <canvas id="radarChart"></canvas>
        </div>

        <div id="recommendationsList" class="mt-8 text-left bg-gray-50 p-6 rounded-xl border border-gray-100 hidden">
            <h4 class="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Pla d'AcciÃ³: Recomanacions de Millora</h4>
            <div id="recommendationsContent" class="space-y-4"></div>
        </div>

        <button onclick="location.reload()" class="mt-8 px-6 py-3 font-semibold text-white bg-cheste-red rounded-full hover:bg-cheste-red-dark transition-colors">Tornar a l'inici</button>
    `;
    questionContainer.appendChild(resultDiv);

    // Logic per afegir les recomanacions dinÃ mica
    const recContainer = resultDiv.querySelector('#recommendationsList');
    const recContent = resultDiv.querySelector('#recommendationsContent');
    let hasRecs = false;

    // Utilitzar keys per ordenar pel ID (1 a 40)
    for (let currentId in answers) {
        const val = parseInt(answers[currentId]);
        if (val < 10) {
            hasRecs = true;
            const q = questions.find(q => q.id == currentId);
            if (q && q.recommendation) {
                const item = document.createElement('div');
                item.className = "flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-cheste-red";
                item.innerHTML = `
                    <div class="flex-shrink-0 mr-3 text-cheste-red mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">${q.subgroup}</p>
                        <p class="text-sm text-gray-800 font-medium">${q.recommendation}</p>
                    </div>
                `;
                recContent.appendChild(item);
            }
        }
    }

    if (hasRecs) {
        recContainer.classList.remove('hidden');
    }
    
    // Generar el grÃ fic quan estÃ  afegit al DOM
    setTimeout(() => {
        const ctx = document.getElementById('radarChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Grup A: Empreses ProveÃ¯dores', 'Grup B: Recursos Financers', 'Grup C: Equip HumÃ ', 'Grup D: Alumnat', 'Grup E: Entorn Social'],
                datasets: [{
                    label: 'PuntuaciÃ³',
                    data: [
                        scoresByGroup['A'],
                        scoresByGroup['B'],
                        scoresByGroup['C'],
                        scoresByGroup['D'],
                        scoresByGroup['E']
                    ],
                    backgroundColor: 'rgba(204, 0, 0, 0.2)',
                    borderColor: '#cc0000',
                    pointBackgroundColor: '#cc0000',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#cc0000',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        min: 0,
                        suggestedMin: 0,
                        angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                        grid: { color: 'rgba(0, 0, 0, 0.1)' },
                        pointLabels: {
                            font: { size: 13, family: "'Inter', sans-serif", weight: '600' },
                            color: '#4B5563'
                        },
                        ticks: {
                            min: 0,
                            beginAtZero: true,
                            max: 80,
                            stepSize: 20,
                            backdropColor: 'transparent'
                        }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }, 50);
}
