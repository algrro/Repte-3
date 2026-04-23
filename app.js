const questions = [
    // GRUP A: EMPRESES PROVEÏDORES
    {
        id: 1, group: "GRUP A: EMPRESES PROVEÏDORES (Cadena de subministrament)", subgroup: "A1. Dignitat Humana",
        text: "1. Quin percentatge de les empreses proveïdores de roba de treball i EPI certifica que la seua fabricació està lliure d'explotació laboral (ex. segell Fair Wear)?",
        options: [
            { label: "Més del 80% (10 pts)", value: "10" },
            { label: "Entre el 30% i el 80% (5 pts)", value: "5" },
            { label: "Menys del 30% o no se sol·licita cap certificació (0 pts)", value: "0" }
        ],
        recommendation: "Seria interessant requerir com a criteri obligatori en les properes licitacions d'EPIs i roba l'acreditació de segells lliures d'explotació laboral (com Fair Wear)."
    },
    {
        id: 2, group: "GRUP A: EMPRESES PROVEÏDORES (Cadena de subministrament)", subgroup: "A1. Dignitat Humana",
        text: "2. Existeix un protocol de recepció de material que verifique que el personal repartidor treballa en condicions de seguretat i dignitat?",
        options: [
            { label: "Sí, es supervisa i hi ha un canal de denúncia davant l'empresa proveïdora (10 pts)", value: "10" },
            { label: "S'observa de manera informal (5 pts)", value: "5" },
            { label: "No es considera responsabilitat del centre (0 pts)", value: "0" }
        ],
        recommendation: "Podria resultar molt beneficiós establir un procediment acollidor i segur en consergeria que vetle pel tracte digne cap al personal repartidor."
    },
    {
        id: 3, group: "GRUP A: EMPRESES PROVEÏDORES (Cadena de subministrament)", subgroup: "A2. Solidaritat i Justícia",
        text: "3. Quin percentatge dels contractes de subministraments menors s'adjudica a xicotetes empreses locals (Cheste i comarca) davant de grans superfícies?",
        options: [
            { label: "Més del 60% (10 pts)", value: "10" },
            { label: "Entre el 20% i el 60% (5 pts)", value: "5" },
            { label: "Menys del 20% (0 pts)", value: "0" }
        ],
        recommendation: "Seria una gran empenta per al municipi intentar afavorir un poc més les xicotetes empreses i comerços de la comarca a l'hora de formalitzar contractes menors."
    },
    {
        id: 4, group: "GRUP A: EMPRESES PROVEÏDORES (Cadena de subministrament)", subgroup: "A2. Solidaritat i Justícia",
        text: "4. Quin és el termini mitjà de pagament a les empreses proveïdores des que la factura és conformada pel centre?",
        options: [
            { label: "Menys de 15 dies (10 pts)", value: "10" },
            { label: "Entre 15 i 30 dies (5 pts)", value: "5" },
            { label: "Més de 30 dies (0 pts)", value: "0" }
        ],
        recommendation: "Resultaria de molta ajuda optimitzar els passos administratius interns per intentar conformar les factures el més ràpid possible i reduir l'espera de les empreses proveïdores."
    },
    {
        id: 5, group: "GRUP A: EMPRESES PROVEÏDORES (Cadena de subministrament)", subgroup: "A3. Sostenibilitat Mediambiental",
        text: "5. Quin percentatge dels subministraments de papereria i consumibles compta amb certificació ecològica (FSC, PEFC o Ecolabel)?",
        options: [
            { label: "Més del 90% (10 pts)", value: "10" },
            { label: "Entre el 50% i el 90% (5 pts)", value: "5" },
            { label: "Menys del 50% (0 pts)", value: "0" }
        ],
        recommendation: "Us animem a sol·licitar que tota la nova papereria i el material fungible compte preferiblement amb alguna etiqueta mediambiental com l'Ecolabel o FSC."
    },
    {
        id: 6, group: "GRUP A: EMPRESES PROVEÏDORES (Cadena de subministrament)", subgroup: "A3. Sostenibilitat Mediambiental",
        text: "6. Es prioritza en les licitacions de maquinària per a tallers la compra d'equips amb la classificació energètica més alta disponible?",
        options: [
            { label: "És un criteri amb un pes superior al 20% en la valoració (10 pts)", value: "10" },
            { label: "Es valora però té un pes secundari (5 pts)", value: "5" },
            { label: "No es puntua l'eficiència energètica (0 pts)", value: "0" }
        ],
        recommendation: "Seria un gran pas avant afegir puntuacions altes (per damunt del 20%) a aquelles ofertes que presenten equips amb major eficiència energètica per als tallers."
    },
    {
        id: 7, group: "GRUP A: EMPRESES PROVEÏDORES (Cadena de subministrament)", subgroup: "A4. Transparència i Participació Democràtica",
        text: "7. Participen els departaments didàctics en la redacció tècnica dels plecs per a assegurar la qualitat i l'ètica del material?",
        options: [
            { label: "Sempre, mitjançant un procés formal i documentat (10 pts)", value: "10" },
            { label: "De vegades, de manera consultiva i informal (5 pts)", value: "5" },
            { label: "La selecció es realitza de manera centralitzada per l'equip directiu juntament amb els departaments, sense criteris de participació oberta (0 pts)", value: "0" }
        ],
        recommendation: "Sempre és positiu buscar fórmules per involucrar activament els departaments didàctics en la redacció d'aquests plecs i formalitzar la seua opinió qualificada."
    },
    {
        id: 8, group: "GRUP A: EMPRESES PROVEÏDORES (Cadena de subministrament)", subgroup: "A4. Transparència i Participació Democràtica",
        text: "8. És públic i accessible per a tot el personal del centre el llistat d'empreses proveïdores i l'import anual facturat per cadascuna?",
        options: [
            { label: "Sí, en una plataforma interna o tauler d'anuncis (10 pts)", value: "10" },
            { label: "Només sota petició formal raonada (5 pts)", value: "5" },
            { label: "No és una informació accessible (0 pts)", value: "0" }
        ],
        recommendation: "Es podria valorar divulgar el llistat principal d'empreses proveïdores i la seua inversió a la intranet del centre de manera anual per millorar la transparència."
    },

    // GRUP B: ENTITATS PROPIETÀRIES I RECURSOS FINANCERS
    {
        id: 9, group: "GRUP B: ENTITATS PROPIETÀRIES I RECURSOS FINANCERS", subgroup: "B1. Dignitat Humana",
        text: "9. En quina mesura s'evita treballar amb entitats financeres que inverteixen en sectors no ètics (armament, combustibles fòssils)?",
        options: [
            { label: "El 100% dels fons estan en banca ètica o amb alts estàndards de RSC (10 pts)", value: "10" },
            { label: "Es mantenen els comptes en banca tradicional però s'han sol·licitat informes d'ètica (5 pts)", value: "5" },
            { label: "Es treballa amb qualsevol entitat sense criteris ètics (0 pts)", value: "0" }
        ],
        recommendation: "Valdria la pena esbrinar o sol·licitar un canvi progressiu d'alguns comptes de gestió del centre cap a iniciatives representatives de la Banca Ètica."
    },
    {
        id: 10, group: "GRUP B: ENTITATS PROPIETÀRIES I RECURSOS FINANCERS", subgroup: "B1. Dignitat Humana",
        text: "10. Com es garanteix l'equitat en el repartiment de les dietes i ajudes de projectes europeus (Erasmus+)?",
        options: [
            { label: "Existeix un barem públic basat en necessitats i mèrits, revisat pel Consell Escolar (10 pts)", value: "10" },
            { label: "El barem és conegut però no s'ha sotmés a revisió participativa (5 pts)", value: "5" },
            { label: "El repartiment es fa seguint criteris tancats de l'equip de coordinació (0 pts)", value: "0" }
        ],
        recommendation: "Resultaria molt adient sotmetre els criteris de repartiment i barems d'accés als fons Erasmus a l'aprovació clara del Consell Escolar."
    },
    {
        id: 11, group: "GRUP B: ENTITATS PROPIETÀRIES I RECURSOS FINANCERS", subgroup: "B2. Solidaritat i Justícia",
        text: "11. Quin percentatge del pressupost de lliure gestió es reinverteix en fons d'emergència o beques pròpies per a l'alumnat amb dificultats?",
        options: [
            { label: "Existeix una partida específica superior al 3% (10 pts)", value: "10" },
            { label: "S'ajuda puntualment segons el cas (5 pts)", value: "5" },
            { label: "Els fons s'utilitzen exclusivament per a despeses de funcionament ordinari (0 pts)", value: "0" }
        ],
        recommendation: "Seria una idea solidària meravellosa poder reservar una petita bossa dins del pressupost exclusivament dedicada a donar suport o beques d'emergència."
    },
    {
        id: 12, group: "GRUP B: ENTITATS PROPIETÀRIES I RECURSOS FINANCERS", subgroup: "B2. Solidaritat i Justícia",
        text: "12. Com es distribueixen els recursos entre les diferents famílies professionals segons les seues necessitats d'equipament?",
        options: [
            { label: "Per un pla d'inversió plurianual consensuat que prioritza les carències tècniques (10 pts)", value: "10" },
            { label: "Per repartiment lineal segons el nombre de l'alumnat (5 pts)", value: "5" },
            { label: "Mitjançant discrecionalitat administrativa segons la disponibilitat del moment (0 pts)", value: "0" }
        ],
        recommendation: "Més que un repartiment idèntic o aleatori, seria fantàstic establir una trajectòria compartida per equipar progressivament a aquells departaments amb més faltes."
    },
    {
        id: 13, group: "GRUP B: ENTITATS PROPIETÀRIES I RECURSOS FINANCERS", subgroup: "B3. Sostenibilitat Mediambiental",
        text: "13. Es compta amb un pla d'inversió per a la millora de l'aïllament tèrmic o la instal·lació d'energies renovables al centre?",
        options: [
            { label: "Sí, amb fons assignats i terminis d'execució (10 pts)", value: "10" },
            { label: "Està sol·licitat a Conselleria però no hi ha inversió pròpia (5 pts)", value: "5" },
            { label: "No es contempla com una prioritat d'inversió (0 pts)", value: "0" }
        ],
        recommendation: "Animem a dissenyar algunes accions a curt termini o destinar xicotets romanents cap a millores pràctiques d'aïllament o energia renovable al propi edifici."
    },
    {
        id: 14, group: "GRUP B: ENTITATS PROPIETÀRIES I RECURSOS FINANCERS", subgroup: "B3. Sostenibilitat Mediambiental",
        text: "14. Quina part del pressupost de manteniment es destina a la reparació d'equips en lloc de la substitució directa per equips nous?",
        options: [
            { label: "Més del 30%, prioritzant la reparabilitat (10 pts)", value: "10" },
            { label: "Entre el 10% i el 30% (5 pts)", value: "5" },
            { label: "Menys del 10%, es tendeix a la substitució per nous models (0 pts)", value: "0" }
        ],
        recommendation: "Fomentar un canvi cultural als tallers apostant fermament per invertir temps i diners a reparar en lloc de substituir immediatament per maquinària nova."
    },
    {
        id: 15, group: "GRUP B: ENTITATS PROPIETÀRIES I RECURSOS FINANCERS", subgroup: "B4. Transparencia i Participació Democràtica",
        text: "15. Quantes sessions informatives obertes a tota la comunitat educativa es realitzen sobre l'execució del Projecte de Gestió?",
        options: [
            { label: "Almenys dues sessions (inici i final de curs) (10 pts)", value: "10" },
            { label: "Una sessió informativa (5 pts)", value: "5" },
            { label: "Cap, la informació es limita als òrgans oficials (0 pts)", value: "0" }
        ],
        recommendation: "Obrir aquestes presentacions comptables a tot el Claustre en una trobada distesa de principi o final de curs resulta sempre un pas decisiu en termes de confiança."
    },
    {
        id: 16, group: "GRUP B: ENTITATS PROPIETÀRIES I RECURSOS FINANCERS", subgroup: "B4. Transparencia i Participació Democràtica",
        text: "16. Existeix un mecanisme perquè el personal puga proposar inversions en la millora de la convivència o infraestructures del centre?",
        options: [
            { label: "Sí, i s'han executat propostes de la plantilla aquest curs (10 pts)", value: "10" },
            { label: "Existeix el canal però no s'ha materialitzat cap proposta (5 pts)", value: "5" },
            { label: "No existeix cap canal de proposta pressupostària (0 pts)", value: "0" }
        ],
        recommendation: "Es podria implantar un format participatiu on cadascú puga aportar la seua visió per invertir i millorar de forma creativa certs espais col·lectius."
    },

    // GRUP C: PERSONAL DEL CENTRE
    {
        id: 17, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i Interí)", subgroup: "C1. Dignitat Humana",
        text: "17. Brecha salarial: Quina és la ràtio de diferència salarial entre el salari net més alt del centre i el salari més baix (personal de neteja o PAS inicial)?",
        options: [
            { label: "Menys d'1:3 (10 pts)", value: "10" },
            { label: "Entre 1:3 i 1:5 (5 pts)", value: "5" },
            { label: "Més d'1:5 (0 pts)", value: "0" }
        ],
        recommendation: "Explorar formes de compensar o intentar encurtir aquestes inevitables minses diferències mitjançant ajudes socials o revisant les posicions inferiors."
    },
    {
        id: 18, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i Interí)", subgroup: "C1. Dignitat Humana",
        text: "18. Pla d'acollida: Existeix un protocol d'acollida per al personal (docent, expert o interí) que s'incorpora en setembre o a meitat de curs?",
        options: [
            { label: "Sí, inclou acompanyament per un/a mentor/a i guia d'integració (10 pts)", value: "10" },
            { label: "Es lliura una guia bàsica de funcionament de manera administrativa (5 pts)", value: "5" },
            { label: "L'acollida és informal i depén de la bona voluntat dels companys i companyes (0 pts)", value: "0" }
        ],
        recommendation: "Seria un detall inoblidable rebre la nova gent incorporada fora de termini amb una figura de companyia, un programa d'entrada i documentació digital clara."
    },
    {
        id: 19, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i Interí)", subgroup: "C2. Solidaritat i Justícia",
        text: "19. Personal Expert i Interí: Es garanteix el seu accés a les mateixes hores de formació i participació en projectes de centre que el personal funcionari?",
        options: [
            { label: "Paritat total documentada en el pla de formació (10 pts)", value: "10" },
            { label: "Tenen accés però no es facilita activament la seua participació (5 pts)", value: "5" },
            { label: "La seua participació és molt limitada per la seua condició contractual (0 pts)", value: "0" }
        ],
        recommendation: "Animar actívament al personal sense plaça fixa o personal expert a sumar-se constantment a accions formatives perquè hi ha un innegable creixement conjunt."
    },
    {
        id: 20, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i Interí)", subgroup: "C2. Solidaritat i Justícia",
        text: "20. Fons Europeus i d'Innovació: Com es reparteixen els fons addicionals per a la coordinació d'Erasmus+ o projectes d'innovació?",
        options: [
            { label: "Mitjançant convocatòria pública interna amb criteris transparents i rotació de càrrecs (10 pts)", value: "10" },
            { label: "Es reparteixen segons la càrrega de treball prèviament assignada (5 pts)", value: "5" },
            { label: "La selecció de les persones beneficiàries no segueix un criteri públic (0 pts)", value: "0" }
        ],
        recommendation: "Adoptar un to més rotatiu a les oportunitats de coordinació internacional ens enriquirà com a Claustre obrint opcions i reconeixent la flexibilitat de perfils."
    },
    {
        id: 21, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i Interí)", subgroup: "C3. Sostenibilitat Mediambiental",
        text: "21. Quin percentatge de la plantilla (docent i no docent) utilitza mitjans de transport col·lectius (autobús, tren) o cotxe compartit?",
        options: [
            { label: "Més del 40% de la plantilla (10 pts)", value: "10" },
            { label: "Entre el 15% i el 40% (5 pts)", value: "5" },
            { label: "Menys del 15% (0 pts)", value: "0" }
        ],
        recommendation: "Generar reptes saludables en els quals puguem oferir recompenses simpàtiques pel fet de compartir cotxe per eixir rumb a les nostres instal·lacions freqüentment."
    },
    {
        id: 22, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i Interí)", subgroup: "C3. Sostenibilitat Mediambiental",
        text: "22. S'han realitzat accions formatives sobre 'Tallers Sostenibles' o gestió de residus per a tot el personal aquest curs?",
        options: [
            { label: "Sí, amb més d'una sessió de participació massiva (10 pts)", value: "10" },
            { label: "S'ha fet una xarrada o enviat informació per correu (5 pts)", value: "5" },
            { label: "No s'ha realitzat cap acció específica (0 pts)", value: "0" }
        ],
        recommendation: "Invertir una mica d'esforç a preparar una jornada lúdica l'any per refrescar la correcta gestió tècnica dels residus específics pot fer meravelles."
    },
    {
        id: 23, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i Interí)", subgroup: "C4. Transparència i Participació Democràtica",
        text: "23. El personal del centre té accés a les actes de les reunions dels òrgans de govern i de les comissions de treball en format digital?",
        options: [
            { label: "Sí, en un repositori compartit i actualitzat (10 pts)", value: "10" },
            { label: "S'envien per correu només les que afecten directament (5 pts)", value: "5" },
            { label: "Cal sol·licitar-les formalment per a consultar-les (0 pts)", value: "0" }
        ],
        recommendation: "Es podria valorar crear un núvol o secció asíncrona oberta on tot el món puga llegir com i exactament en termes de resolució què s'ha dictat a les actes."
    },
    {
        id: 24, group: "GRUP C: PERSONAL DEL CENTRE (Docent, PAS, Expert i Interí)", subgroup: "C4. Transparència i Participació Democràtica",
        text: "24. Quin percentatge del personal participa en comissions de treball voluntàries (Coordinació d'Igualtat, Sostenibilitat, etc.)?",
        options: [
            { label: "Més del 25% de la plantilla (10 pts)", value: "10" },
            { label: "Entre el 10% i el 25% (5 pts)", value: "5" },
            { label: "Menys del 10% (0 pts)", value: "0" }
        ],
        recommendation: "Busquem idees que motiven les persones atorgant un valor emocional o llibertat de treball per veure crèixer la rati col·laboradora per damunt d'un 25%."
    },

    // GRUP D: ALUMNAT I EMPRESES DE PRÀCTIQUES
    {
        id: 25, group: "GRUP D: ALUMNAT I EMPRESES DE PRÀCTIQUES", subgroup: "D1. Dignitat Humana",
        text: "25. Quin percentatge de les incidències d'alumnat es resolen mitjançant processos de mediació abans de passar al règim disciplinari?",
        options: [
            { label: "Més del 75% (10 pts)", value: "10" },
            { label: "Entre el 40% i el 75% (5 pts)", value: "5" },
            { label: "Menys del 40%, predomina la sanció directa (0 pts)", value: "0" }
        ],
        recommendation: "Potser seria valuós crear figures oficials mediadores per minimitzar gradualment les expulsions en favor d'acords comunitaris reparadors a classe."
    },
    {
        id: 26, group: "GRUP D: ALUMNAT I EMPRESES DE PRÀCTIQUES", subgroup: "D1. Dignitat Humana",
        text: "26. Existeixen protocols actius i coneguts per l'alumnat per a denunciar possibles casos d'assetjament o discriminació dins del centre?",
        options: [
            { label: "Sí, amb formació específica i canals anònims i segurs (10 pts)", value: "10" },
            { label: "Existeix el protocol però no s'ha difós prou entre l'alumnat (5 pts)", value: "5" },
            { label: "Només s'actua quan el cas ja ha esclatat (0 pts)", value: "0" }
        ],
        recommendation: "Es podria valorar organitzar proactivament bústies anònimes molt assequibles als corredors en defensa prèvia enfront a qualsevol abús acompanyat de difusió."
    },
    {
        id: 27, group: "GRUP D: ALUMNAT I EMPRESES DE PRÀCTIQUES", subgroup: "D2. Solidaritat i Justícia",
        text: "27. Les empreses on l'alumnat realitza les pràctiques (FCT) se seleccionen sota criteris de responsabilitat social i ètica laboral?",
        options: [
            { label: "Sí, es realitza un cribratge ètic previ als convenis (10 pts)", value: "10" },
            { label: "Es revisen si hi ha queixes, però no és un criteri d'elecció inicial (5 pts)", value: "5" },
            { label: "S'accepta qualsevol empresa amb capacitat tècnica (0 pts)", value: "0" }
        ],
        recommendation: "Seria interessant acostar-nos subtilment el tema RSC cap a les empreses conveniades afegint recomanacions amistoses als nostres tràmits informals."
    },
    {
        id: 28, group: "GRUP D: ALUMNAT I EMPRESES DE PRÀCTIQUES", subgroup: "D2. Solidaritat i Justícia",
        text: "28. Es fomenta l'ajuda entre iguals mitjançant programes d'alumnat-tutor o suport a l'estudiant amb dificultats d'aprenentatge?",
        options: [
            { label: "Sí, hi ha un programa formal amb reconeixement (10 pts)", value: "10" },
            { label: "Es realitza de manera informal en alguns departaments (5 pts)", value: "5" },
            { label: "No es fomenta activament (0 pts)", value: "0" }
        ],
        recommendation: "Us proposem activar 'Germans Majors': un bonic reconeixement o puntatge per a eixos joves excel·lents de pràctiques que apadrinen la gent debutant als tallers."
    },
    {
        id: 29, group: "GRUP D: ALUMNAT I EMPRESES DE PRÀCTIQUES", subgroup: "D3. Sostenibilitat Mediambiental",
        text: "29. Residu Zero en Tallers: Quines mesures s'apliquen per a reduir el consum de materials fungibles en les pràctiques de l'alumnat?",
        options: [
            { label: "Ús obligatori de materials recuperats i auditories de residus per aula (10 pts)", value: "10" },
            { label: "Separació bàsica de residus però sense pla de reducció de consum (5 pts)", value: "5" },
            { label: "No hi ha un control de l'impacte ambiental del material gastat (0 pts)", value: "0" }
        ],
        recommendation: "Llançar microreptes verds a classe, invitant tothom a usar restes aprofitables sota la fita setmanal de pràctiques excel·lents a 'Residu Zero'."
    },
    {
        id: 30, group: "GRUP D: ALUMNAT I EMPRESES DE PRÀCTIQUES", subgroup: "D3. Sostenibilitat Mediambiental",
        text: "30. S'apliquen criteris de 'subministrament digital' per a evitar la impressió de manuals i exàmens en format paper?",
        options: [
            { label: "El 100% de la documentació tècnica es gestiona digitalment (10 pts)", value: "10" },
            { label: "S'ha reduït significativament però encara es fan moltes fotocòpies (5 pts)", value: "5" },
            { label: "El format paper continua sent el suport principal (0 pts)", value: "0" }
        ],
        recommendation: "Resultaria excel·lent començar ja a establir mesures fermes i graduals on tot disseny i dossier avaluatiu emigrin forçosament i digital a dispositius evitant el clàssic follet documentat."
    },
    {
        id: 31, group: "GRUP D: ALUMNAT I EMPRESES DE PRÀCTIQUES", subgroup: "D4. Transparència i Participació Democràtica",
        text: "31. Comissió de Convivència: Té l'alumnat delegat capacitat real per a proposar i votar canvis en les normes del centre?",
        options: [
            { label: "Sí, i s'han modificat normes a proposta de l'alumnat aquest curs (10 pts)", value: "10" },
            { label: "Tenen veu però la seua capacitat d'influència és escassa (5 pts)", value: "5" },
            { label: "La participació és merament informativa (0 pts)", value: "0" }
        ],
        recommendation: "Poder assegurar eixa cadira d'alumne com a vot decisiu sobre convivència i inclús normes enxarparia en grau considerable l'empoderament global."
    },
    {
        id: 32, group: "GRUP D: ALUMNAT I EMPRESES DE PRÀCTIQUES", subgroup: "D4. Transparència i Participació Democràtica",
        text: "32. Iniciatives de Millora: Existeix un pressupost participatiu gestionat directament per l'alumnat per a millores en les zones comunes?",
        options: [
            { label: "Sí, amb una partida assignada i gestió autònoma de l'alumnat (10 pts)", value: "10" },
            { label: "S'escolten les seues propostes però la decisió final i el pressupost són tancats (5 pts)", value: "5" },
            { label: "No hi ha pressupost destinat a propostes de l'alumnat (0 pts)", value: "0" }
        ],
        recommendation: "Fer un vot sobre una petita part monetària per veure si desitgen millorar espais exteriors de manera integral donarà grans sensacions constructores d'orgull de comunitat."
    },

    // GRUP E: ENTORN SOCIAL (Cheste i Famílies)
    {
        id: 33, group: "GRUP E: ENTORN SOCIAL (Cheste i Famílies)", subgroup: "E1. Dignidad Humana",
        text: "33. Quin percentatge de les instal·lacions del centre estan obertes per a l'ús de les associacions locals de Cheste fora de l'horari lectiu?",
        options: [
            { label: "Més del 50% de les instal·lacions disponibles (10 pts)", value: "10" },
            { label: "Ús molt puntual de sales d'actes o espais concrets (5 pts)", value: "5" },
            { label: "El centre està tancat a l'ús ciutadà (0 pts)", value: "0" }
        ],
        recommendation: "Seria molt agraït per part de la població que s'obriren parcialment pistes i algunes infraestructures com a unió amistosa formativa-local fora de dies lectius."
    },
    {
        id: 34, group: "GRUP E: ENTORN SOCIAL (Cheste i Famílies)", subgroup: "E1. Dignidad Humana",
        text: "34. Es realitzen accions específiques per a incloure les famílies de localitats llunyanes en la vida del centre (reunions online, canals de participació)?",
        options: [
            { label: "Sí, es garanteix la participació híbrida en totes les sessions (10 pts)", value: "10" },
            { label: "S'ofereixen algunes facilitats digitals però no de manera sistemàtica (5 pts)", value: "5" },
            { label: "La comunicació amb les famílies és unidireccional i presencial (0 pts)", value: "0" }
        ],
        recommendation: "Sempre sumarem més suport familiar posant al seu abast reunions mixtes com a un repte consolidat per protegir la vinculació independentment dels desplaçaments llunyans."
    },
    {
        id: 35, group: "GRUP E: ENTORN SOCIAL (Cheste i Famílies)", subgroup: "E2. Solidaritat i Justícia",
        text: "35. Es realitzen projectes d'Aprenentatge-Servei (ApS) on l'alumnat aplique els seus coneixements tècnics per a resoldre necessitats de Cheste?",
        options: [
            { label: "Més de 3 projectes anuals amb impacte social directe (10 pts)", value: "10" },
            { label: "1 projecte puntual a l'any (5 pts)", value: "5" },
            { label: "No es realitzen projectes vinculats a l'entorn social (0 pts)", value: "0" }
        ],
        recommendation: "Una magnífica meta a llarg termini per als tutors pot ser planificar xicotets actes d'Ajuda Solidària com un requeriment tècnic formatiu real a l'entorn veïnal de Cheste."
    },
    {
        id: 36, group: "GRUP E: ENTORN SOCIAL (Cheste i Famílies)", subgroup: "E2. Solidaritat i Justícia",
        text: "36. Existeix un programa de donació o préstec de maquinària i material descatalogat a entitats socials o escoles amb menys recursos?",
        options: [
            { label: "Sí, amb un registre públic de donacions anual (10 pts)", value: "10" },
            { label: "Es fa puntualment quan hi ha una petició externa (5 pts)", value: "5" },
            { label: "El material que ja no s'usa s'acumula o es llança (0 pts)", value: "0" }
        ],
        recommendation: "Resultaria especial per exemple teixir xarxes humanitàries preparant aquells antics ordinadors o mobles per anar a entitats col·laborants més humils del voltant."
    },
    {
        id: 37, group: "GRUP E: ENTORN SOCIAL (Cheste i Famílies)", subgroup: "E3. Sostenibilidad Medioambiental",
        text: "37. Mobilitat Sostenible: El centre ha gestionat amb les autoritats la millora de la freqüència d'autobusos o trens per a reduir l'ús del cotxe?",
        options: [
            { label: "Sí, hi ha una col·laboració activa i millores aconseguides (10 pts)", value: "10" },
            { label: "S'ha fet alguna petició formal però sense seguiment (5 pts)", value: "5" },
            { label: "No s'ha realitzat cap gestió en matèria de transport públic (0 pts)", value: "0" }
        ],
        recommendation: "Us animem a seguir sumant pressions amigables administratives des del Consistori perquè facin la connexió per tren i bus del col·lectiu jove tan inqüestionable com siga possible."
    },
    {
        id: 38, group: "GRUP E: ENTORN SOCIAL (Cheste i Famílies)", subgroup: "E3. Sostenibilidad Medioambiental",
        text: "38. Biodiversitat i Entorn: Es mantenen les zones exteriors del centre amb criteris de jardineria sostenible (plantes autòctones, estalvi d'aigua)?",
        options: [
            { label: "Sí, és un espai de biodiversitat gestionat de manera ecològica (10 pts)", value: "10" },
            { label: "S'utilitzen criteris bàsics de manteniment però sense enfocament ecològic (5 pts)", value: "5" },
            { label: "Zones exteriors poc cuidades o pavimentades majoritàriament (0 pts)", value: "0" }
        ],
        recommendation: "Un excel·lent projecte podria ser reformar l'estètica mediambiental envoltada creant progressivament patis més amables amb bosquets o racons d'espècies d'ombra natural mediterrània."
    },
    {
        id: 39, group: "GRUP E: ENTORN SOCIAL (Cheste i Famílies)", subgroup: "E4. Transparència i Participació Democràtica",
        text: "39. S'elabora una memòria anual pública que explique a la ciutadania de Cheste l'impacte social i ambiental del centre?",
        options: [
            { label: "Sí, es publica i es presenta en un acte obert al poble (10 pts)", value: "10" },
            { label: "Es publica en la web però és una memòria estrictament acadèmica (5 pts)", value: "5" },
            { label: "No es comunica l'impacte social del centre (0 pts)", value: "0" }
        ],
        recommendation: "Podria marcar la diferència preparar un simple resum o tríptic amb el nostre 'Balanç' que fora un esdeveniment orgullós d'ensenyar socialment la nostra aportació col·lectiva."
    },
    {
        id: 40, group: "GRUP E: ENTORN SOCIAL (Cheste i Famílies)", subgroup: "E4. Transparència i Participació Democràtica",
        text: "40. Participació en el Poble: El centre participa de manera activa en els consells de ciutadania o fòrums de decisió del municipi de Cheste?",
        options: [
            { label: "Presència activa i col·laborativa en la vida política i social del poble (10 pts)", value: "10" },
            { label: "Participació puntual en festes o esdeveniments comercials (5 pts)", value: "5" },
            { label: "El centre funciona de manera aïllada de la gestió municipal (0 pts)", value: "0" }
        ],
        recommendation: "Seria una idea integrativa encisadora aconseguir col·laboració garantint permanentment per al nostre alumnat d'FP posicions o llibertat creativa clau dintre els òrgans de la societat ciutadana."
    }
];

// Estat de l'aplicació
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

// Inicialització
document.addEventListener('DOMContentLoaded', () => {
    // Comprovar si hi ha sessió guardada al localstorage
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
    
    // Esdeveniments de navegació
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
            saveState(); // Guardem persistència
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
        saveState(); // Guardem persistència de navegació
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

    // Netejar la sessió guardada en acabar
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
        <h3 class="text-3xl font-extrabold text-gray-900 mb-2">Moltes gràcies!</h3>
        <p class="text-xl font-bold text-cheste-red mb-4">Puntuació obtinguda: ${totalScore} / ${maxScore} pts (${percentage}%)</p>
        <p class="text-lg text-gray-600 mb-8">L'auditoria s'ha completat de manera satisfactòria segons la Matriu del Bé Comú 5.0 adaptada al CIPFP Cheste. Aquests resultats serviran per construir un centre més ètic, sostenible i solidari.</p>
        
        <div class="relative w-full aspect-square md:aspect-video mb-8">
            <canvas id="radarChart"></canvas>
        </div>

        <div id="recommendationsList" class="mt-8 text-left bg-gray-50 p-6 rounded-xl border border-gray-100 hidden">
            <h4 class="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Pla d'Acció: Recomanacions de Millora</h4>
            <div id="recommendationsContent" class="space-y-4"></div>
        </div>

        <button onclick="location.reload()" class="mt-8 px-6 py-3 font-semibold text-white bg-cheste-red rounded-full hover:bg-cheste-red-dark transition-colors">Tornar a l'inici</button>
    `;
    questionContainer.appendChild(resultDiv);

    // Logic per afegir les recomanacions dinàmica
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
    
    // Generar el gràfic quan està afegit al DOM
    setTimeout(() => {
        const ctx = document.getElementById('radarChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Grup A: Empreses Proveïdores', 'Grup B: Recursos Financers', 'Grup C: Equip Humà', 'Grup D: Alumnat', 'Grup E: Entorn Social'],
                datasets: [{
                    label: 'Puntuació',
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
