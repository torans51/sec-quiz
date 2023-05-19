import { parse } from 'node-html-parser'

const html = `
<table cellspacing="0" cellpadding="0" class="excel1">
  <colgroup><col width="64" style="width:48pt;">
  <col width="823" style="width:617pt;">
  <col width="64" style="width:48pt;">
  </colgroup><tbody><tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;width:48pt;">&nbsp;</td>
    <td class="excel2" style="border-left:none;width:617pt;">1. &nbsp;</td>
    <td class="excel2" style="border-left:none;width:48pt;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Qual è il    provvedimento normativo di riferimento per la salute e la sicurezza sui    luoghi di lavoro?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il D. Lgs. 81/2008</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il D.Lgs. 626/94</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il D.P.R.547/55</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il DM 382/1998</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">2. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Qual è stata la    funzione del DM382/1998?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quello di individuare    le effettive particolari esigenze connesse al servizio espletato o alle    peculiarità organizzative della scuola per la corretta&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">attuazione del    DLgs.626/94</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quella di essere il    provvedimento precursore del D.Lgs. 81/2008</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quella di regolare le    procedure antincendio</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quella di stabilire    le norme del primo soccorso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">3. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Secondo la normativa    di sicurezza, i docenti sono:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">con i stessi diritti    dei datori di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">soggetti non    interessati dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">rappresentanti dei    lavoratori sulla sicurezza</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">4. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Lo studente è    equiparato al lavoratore?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo nei casi in cui    si faccia uso di laboratori e attrezzature di lavoro in genere, agenti    chimici, fisici e biologici, ivi comprese le apparecchiature</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">fornite di    videoterminali limitatamente ai periodi in cui l'allievo sia effettivamente    applicato alla strumentazioni o ai laboratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo nelle scuole    secondarie di primo e di secondo grado</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">5. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">L'ambiente di studio    e di lavoro è reso più idoneo e sicuro attraverso:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">interventi    sull'edilizia scolastica, l'organizzazione del lavoro e il sistema    partecipato basato sulla formazione dei soggetti</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">la formazione del    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">gli interventi    sull'edilizia scolastica</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">la nomina del RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">6. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli obblighi dei    lavoratori in materia di sicurezza fanno parte del programma di informazione?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">No sono i lavoratori    che devono informarsi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">No</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo in qualche caso    previsto espressamente dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">7. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Decreto    Legislativo 81 del 2008 si applica:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">indifferentemente ad    ogni settore lavorativo</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo alle strutture    pubbliche</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">in nessuno dei due    casi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo alle strutture    private</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">8. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I dispositivi di    protezione individuale:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere forniti    quando non esistono tecniche alternative per la prevenzione o protezione    collettiva, né misure organizzative sufficienti a&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">ridurre adeguatamente    il rischio</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">non devono essere    forniti in nessun momento</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere forniti    solo ai lavoratori assunti a tempo determinato</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere forniti    a richiesta del lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">9. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Individua l'obbligo    del datore di lavoro che può essere delegato ad altro soggetto:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">nomina del medico    competente</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">l'elaborazione del    documento di valutazione dei rischi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">la valutazione dei    rischi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">la nomina del    Responsabile del Servizio di Prevenzione e Protezione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">10. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Datore di lavoro    può assumere l'incarico di responsabile del servizio di prevenzione e    protezione?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, se ricorrono le    condizioni stabilite dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, se lo ritiene    opportuno</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">No mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">11. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Dirigente    Scolastico può essere esonerato dalla propria responsabilità in materia di    sicurezza:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">no mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sì, solo se ricorre    all'ausilio di un responsabile del servizio di protezione e prevenzione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sì</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">nei casi previsti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">12. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il lavoratore può    svolgere l'incarico di Responsabile del servizio di protezione e prevenzione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo se possiede i    requisiti stabiliti dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sì, se vuole</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">no mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo per certi tipi    di istituzioni scolastiche</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">13. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">L'RLS può accedere ai    luoghi di lavoro per raccogliere informazioni?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo se autorizzato</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo in qualche caso    previsto espressamente dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">No</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">14. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Rappresentante dei    lavoratori per la sicurezza:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è eletto o designato    dai lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">è un volontario</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è individuato dal    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">è un collaboratore    del Responsabile del servizio di prevenzione e protezione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">15. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Rappresentante dei    lavoratori per la sicurezza:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">ha diritto ad un    formazione specifica</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">non è interessato ad    una formazione particolare</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è individuato tra    esperti per cui non necessita di formazione particolare</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">non può fare    formazione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">16. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Al Rappresentante dei    lavoratori per la sicurezza:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono applicabili le    tutele previste dalla Legge 300/70</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">spettano tutele solo    se è individuato tra personale assunto a tempo determinato</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">spettano le tutele    come ad ogni lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">non necessitano    particolari elementi di tutela</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">17. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Rappresentante dei    lavoratori per la sicurezza e il CCNL:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">nel CCNL viene    riportato il ruolo e i diritti dell'RLS</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">non hanno niente in    comune</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">il CCNL parla    dell'RLS solo quando questi viene retribuito</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">il CCNL parla    dell'RLS solo in ricorrenza di condizioni di pericolo</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">18. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il medico competente    deve essere incaricato:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">obbligatoriamente    alla presenza di rischi che richiedono la sorveglianza sanitaria</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">quando lo decide il    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">a seconda delle    tipologie di istituzioni scolastiche</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">quando se ne ravvisi    la necessità</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">19. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Non può svolgere il    ruolo di medico competente:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">il medico con    specializzazione in ortopedia e traumatologia</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">il docente in    medicina preventiva dei lavoratori e psicotecnica o in tossicologia    industriale o in igiene industriale o in fisiologia ed igiene&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;del lavoro o in clinica del lavoro o in    igiene e medicina preventiva o in medicina legale e delle assicurazioni</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">il medico in possesso    di specializzazione in medicina del lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">il medico con    autorizzazione di cui all’art. 55 del D.Lgs. 277/1991</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">20. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La pianificazione    delle misure di prevenzione è un punto fondamentale nel D.Lgs. 81/2008.</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sì</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">non è importante    pianificarle, basta solo attuarle</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">no</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo in qualche caso    previsto espressamente dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">21. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Per quanto riguarda    la sicurezza, è importante l'aspetto collettivo e partecipativo?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">No perché la    sicurezza è soggettiva</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">No</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo nelle scuole    secondarie di secondo grado</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">22. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Da chi sono designati    gli addetti al primo soccorso?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Dal datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Dall'RLS</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Dal Medico competente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Dall'RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">23. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">L'informazione sulle    misure di emergenza riguarda solo gli addetti specifici o va estesa a tutti i    lavoratori:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">riguarda tutti i    lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">lo decide di volta in    volta il datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">non riguarda nessuno</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">riguarda solo gli    addetti specifici</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">24. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Da chi sono designati    gli addetti antincendio?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Dal datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Dal RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Dal RLS</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Dal medico competente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">25. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Le scuole sono    considerate luogo di lavoro?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, tutte</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo le scuole    secondarie superiori</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">No</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo se quelle a    norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">26. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Come bisogna tenere    le vie di esodo e di circolazione nella scuola?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Devono essere tenute    sgombre</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Devono essere tenute    pulite</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Possono essere tenute    ingombre purché non presentino motivi di inciampo</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">È indifferente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">27. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quando il Dirigente    Scolastico non può svolgere l'incarico di RSPP?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nelle scuole in cui i    dipendenti (docenti ed ATA) siano più di 200</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Dirigente    Scolastico non può mai svolgere l'incarico di RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Dirigente    Scolastico svolge sempre l'incarico di RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nelle scuole    secondarie di secondo grado</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">28. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nelle scuole è    obbligatoria la sorveglianza sanitaria?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Dipende dalla    valutazione del rischio effettuata</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">No mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo nelle scuole con    oltre 200 alunni</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">29. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Per le scuole di    istruzione secondaria di secondo grado, qual è l'organo di riferimento in    materia di edilizia scolastica?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Provincia</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Comune</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Regione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">USR</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">30. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Per le scuole di    istruzione secondaria di primo grado, qual è l'organo di riferimento in    materia di edilizia scolastica?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Comune</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Provincia</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Regione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">USR</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">31. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Per le scuole    primarie, qual è l'organo di riferimento in materia di edilizia scolastica?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Comune</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Provincia</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Regione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">USR</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">32. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Chi è individuato    come datore di lavoro all'interno della scuola?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Dirigente    Scolastico</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il datore di lavoro è    presente solo nelle scuole private</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Direttore    dell'Ufficio Scolastico Regionale</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nella scuola non    esiste il datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">33. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nell'attuazione di un    sistema di sicurezza nella scuola, gli alunni devono essere coinvolti?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo se maggiorenni</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">No</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Non è necessario</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">34. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Le norme sulla    sicurezza guardano alla scuola solo come luogo di lavoro:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">la scuola assume un    ruolo fondamentale anche nell’operaz. di diffusione della cultura della    sicurezza nei luoghi di lavoro nel tessuto sociale</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sì</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">l'affermazione è vera    tranne che per alcuni tipi di scuole</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo nei casi    previsti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">35. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Ci sono dei rischi    derivanti dall'organizzazione del lavoro?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">No</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo in alcuni tipi    di scuola</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo se vengono    indicati dal medico competente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">36. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Non è necessario che    i luoghi di lavoro, gli impianti e i dispositivi di sicurezza debbano essere    sempre sottoposti a regolari e periodici controlli:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è falso</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">la necessità è data    dalle circostanze</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vero</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">infatti il controllo    periodico è subordinato alla tipologia di rischio</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">37. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel3" style="border-top:none;border-left:none;">Tra gli obiettivi del    piano di emergenza vi è quello di circoscrivere e contenere l'evento    pericoloso in modo da limitare i danni e permettere la ripresa dell'attività:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è sempre vero</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">è parzialmente vero</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è falso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vero solo se a    deciderlo è il datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">38. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La formazione deve    avvenire in particolare in occasione dell'assunzione, del trasferimento e/o    cambiamento di mansioni e dell'introduzione di&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">nuove attrezzature di    lavoro, tecnologie, sostanze pericolose:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vero</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo nei casi    espressamente previsti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è falso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo se lo decide il    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">39. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La durata, i    contenuti minimi e le modalità della formazione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono definiti    mediante accordo in sede di Conferenza permanente per i rapporti tra Stato,    le regioni e le province autonome di Trento e Bolzano</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono definiti dal    RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono di volta in    volta regolati da accordi di comparto</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono definiti dal    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">40. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">L'informazione, la    formazione e l'addestramento sono lo strumento principale della prevenzione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vero</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo nei casi    previsti dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è falso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo se lo decide il    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">41. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Formazione e    informazione sono attività di protezione e prevenzione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vero</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo nei casi    previsti dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo se il RSPP è    d'accordo</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">è falso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">42. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il D. Lgs. 81/2008    parla di RLS:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">anche di comparto,    aziendale e di sito produttivo</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo di comparto</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo aziendale</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo di comparto e di    sito produttivo</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">43. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il rappresentante dei    lavoratori per la sicurezza ha diritto di formulare osservazioni in occasione    di verifiche compiute dagli organi di vigilanza:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sempre in tutti i    casi</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo nei casi    previsti dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo in alcuni tipi    di scuole</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">44. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La verifica    dell'apprendimento è prevista alla fine della formazione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">del RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">del preposto</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">del RLS</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">del datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">45. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il responsabile del    servizio di prevenzione e protezione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è designato    obbligatoriamente</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">è designato in    presenza di rischi particolari</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è designato solo nei    casi previsti dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">è designato    opzionalmente dal datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">46. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il cortile della    scuola:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è considerato    comunque luogo di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">non è mai considerato    luogo di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è considerato luogo    di lavoro se prescritto dalla norma tecnica</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">è considerato luogo    di lavoro se prevista dal documento di valutazione dei rischi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">47. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli studenti:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">non vengono computati    ai fini della determinazione del numero di lavoratori dal quale il D.Lgs.    81/2008 fa discendere particolari obblighi</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono computati nel    numero dei lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">vengono computati a    seconda del tipo di rischio</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">vengono computatati a    seconda del tipo di scuola</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">48. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli utenti dei    servizi di orientamento professionale avviati presso datori di lavoro:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono equiparati ai    lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">non possono essere    equiparati ai lavoratori in quanto non dipendenti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono da considerare    come soggetti esterni</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">non sono rilevanti    per la disciplina</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">49. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La finalità della    formazione è:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">far conoscere,    formare e conseguentemente modificare le abitudini e i comportamenti dei    lavoratori per prevenire e proteggerli dai rischi stessi</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">definita dal datore    di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">definire,    classificare e valutare solo i rischi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">stabilita di volta in    volta in sede di riunione periodica</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">50. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Lo studente quando è    individuato come lavoratore, lo è:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo limitatamente ai    periodi in cui l'allievo sia effettivamente applicato alla strumentazioni o    ai laboratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">nelle scuole    secondarie di secondo grado</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sulla base del    regolamento d'istituto</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sempre in tutti i    casi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel4" style="border-top:none;border-left:none;">51. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel4" style="border-top:none;border-left:none;">Il D.Lgs. 81/2008 è    da applicarsi nella scuola:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel4" style="border-top:none;border-left:none;">tenendo conto delle    particolari esigenze connesse al servizio espletato</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel4" style="border-top:none;border-left:none;">a seconda delle    tipologie di istituzioni scolastiche</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">integralmente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">52. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel4" style="border-top:none;border-left:none;">Qual è l'obbligo che    il datore di lavoro potrebbe delegare:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel4" style="border-top:none;border-left:none;">la nomina del medico    competente</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel4" style="border-top:none;border-left:none;">la nomina del    Responsabile del Servizio di Prevenzione e Protezione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel4" style="border-top:none;border-left:none;">la valutazione dei    rischi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">l'elaborazione del    documento di valutazione dei rischi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">53. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nella scuola, con le    norme sulla sicurezza:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">non viene meno    l'obbligo di vigilanza</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel4" style="border-top:none;border-left:none;">viene meno l'obbligo    di vigilanza</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel4" style="border-top:none;border-left:none;">il datore di lavoro    può scegliere di applicare le norme sulla sicurezza sui luoghi di lavoro o le    norme sulla vigilanza</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel4" style="border-top:none;border-left:none;">viene meno l'obbligo    di vigilanza solo nei casi previsti dal documento di valutazione dei rischi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel4" style="border-top:none;border-left:none;">54. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il rappresentante dei    lavoratori per la sicurezza è consultato preventivamente in ordine alla    designazione del responsabile e degli addetti&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;al servizo di prevenzione, all'attività di    prevenzione incendi, al pronto soccorso, alla evacuazione dei lavoratori e    del medico competente:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vero</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vero tranne che per    il medico competente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è falso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vero solo in casi    specifici</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">55. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">L'informazione, la    formazione e l'addestramento sono finalizzate anche a far modificare le    abitudini e i comportamenti dei lavoratori e loro&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">equiparati per    prevenire e proteggere gli stessi dai rischi:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vero</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo nei casi    previsti dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è falso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo se lo decide il    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">56. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel4" style="border-top:none;border-left:none;">L'informazione e la    formazione devono essere commisurate alla valutazione dei rischi e devono    essere riferite ai rischi del posto di lavoro ed&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel4" style="border-top:none;border-left:none;">alle specifiche    mansioni:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel4" style="border-top:none;border-left:none;">è vero</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel4" style="border-top:none;border-left:none;">solo nei casi    previsti dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel4" style="border-top:none;border-left:none;">è falso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo se lo decide il    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">57. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La norma definisce    l'obbligo almeno annuale di indire riunioni periodiche dei principali    soggetti del “sistema sicurezza":</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vero</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo nei casi    previsti dalla norma</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo se lo decide il    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">è falso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">58. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il datore di lavoro    deve far ricorso alla segnaletica di sicurezza:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">quando, anche a    seguito della valutazione effettuata, risultino rischi che non possono essere    evitati o sufficientemente limitati</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">tutte le volte    stabilite dal medico competente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">quando vi sono    condizioni di bassa visibilità</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">59. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La segnaletica di    sicurezza:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve essere conforme    alle prescrizioni di cui agli allegati da XXIV a XXXII del D.Lgs 81/2008</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">è indicata dal    D.Lgsd. 626/94</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">viene definita    durante la riunione periodica</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">è liberamente    determinata dal Dirigente Scolastico</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">60. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Le forme, i colori, i    pittogrammi utilizzati nella segnaletica di sicurezza:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">hanno significati    predeterminati</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">vengono stabiliti    durante la riunione periodi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">vengono definiti dal    RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono liberi, purché    garantiscano una informazione effettiva</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">61. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I cartelli di    divieto:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma rotonda    con pittogramma nero su fondo bianco; bordo e banda rossi</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma quadrata    o rettangolare con pittogramma bianco su fondo verde</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma quadrata    o rettangolare con pittogramma bianco su fondo rosso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma rotonda    con pittogramma bianco su fondo azzurro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">62. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I cartelli di    avvertimento:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma    triangolare con pittogramma nero su fondo giallo e bordo nero</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma quadrata    o rettangolare con pittogramma bianco su fondo rosso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma rotonda    con pittogramma bianco su fondo azzurro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma rotonda    con pittogramma azzurro su fondo bianco</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">63. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I cartelli di    prescrizione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma rotonda    con pittogramma bianco su fondo azzurro</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma quadrata    o rettangolare con pittogramma bianco su fondo verde</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma quadrata    o rettangolare con pittogramma bianco su fondo rosso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma quadrata    o rettangolare con pittogramma rosso su fondo bianco</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">64. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I cartelli di    salvataggio:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma quadrata    o rettangolare con pittogramma bianco su fondo verde</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma    triangolare con pittogramma nero su fondo giallo e bordo nero</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma rotonda    con pittogramma bianco su fondo azzurro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma    triangolare con pittogramma nero su fondo rosso e bordo nero</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">65. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I cartelli per le    attrezzature antincendio:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma quadrata    o rettangolare con pittogramma bianco su fondo rosso</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma    triangolare con pittogramma nero su fondo giallo e bordo rosso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma quadrata    o rettangolare con pittogramma bianco su fondo verde</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono a forma    triangolare con pittogramma nero su fondo giallo e bordo nero</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">66. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il videoterminale:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">può essere    responsabile dell'insorgenza di disturbi a livello oculare o dell'apparato    muscolo scheletrico</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">può essere    responsabile dell'insorgenza di disturbi a livello oculare per negligenza del    lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">può essere    responsabile dell'insorgenza di disturbi a livello polmonare</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">non è responsabile    dell'insorgenza di disturbi a livello scheletrico</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">67. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il lavoratore a    videoterminale è colui che:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">utilizza    un'attrezzatura munita di videoterminali, in modo sistematico o abituale, per    venti ore settimanali</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">utilizza    un'attrezzatura munita di videoterminali, in modo sistematico o abituale, per    trenta ore settimanali</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">utilizza    un'attrezzatura munita di videoterminali, in modo sistematico o abituale, per    quindici ore settimanali</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">utilizza comunque    un'attrezzatura munita di videoterminali</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">68. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il lavoratore a    videoterminale:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve essere    sottoposto a sorveglianza sanitaria</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">può essere sottoposto    a sorveglianza sanitaria se concordato in sede di riunione periodica</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">può essere sottoposto    a sorveglianza sanitaria su indicazione del RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">può essere sottoposto    a sorveglianza sanitaria</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">69. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il lavoratore a    videoterminale:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">ha diritto ad una    pausa di 15 minuti ogni 2 ore</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">ha diritto ad una    pausa di15 minuti ogni 3 ore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">ha diritto ad una    pausa di 20 minuti ogni 3 ore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">ha diritto ad una    pausa di 10 minuti ogni 2 ore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">70. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">In caso di lavoro al    videoterminale, nel computo dei tempi di interruzione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">non sono compresi i    tempi di attesa della risposta da parte del sistema elettronico, che sono    considerati tempo di lavoro ove il lavoratore non&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">possa abbandonare il    posto di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono compresi i tempi    di attesa della risposta da parte del sistema elettronico, che sono    considerati tempo di lavoro ove il lavoratore non&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">possa abbandonare il    posto di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">potrebbero essere    compresi i tempi di attesa della risposta da parte del sistema elettronico a    seconda dei dispositivi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">non sono compresi i    tempi di attesa della risposta da parte del sistema elettronico, che sono    considerati tempo di lavoro ove il lavoratore non&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">possa abbandonare il    posto di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">71. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La postazione di    lavoro:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">comprende la    stampante</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">non comprende la    stampante</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">comprende la    stampante se a getto d'inchiostro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">comprende la    stampante se così definito dal datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">72. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La valutazione dei    rischi derivanti da esposizioni ad agenti fisici:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è programmata ed    effettuata, con cadenza almeno quadriennale</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">è programmata ed    effettuata, con cadenza almeno decennale</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è importante    effettuarla una sola volta</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">viene effettuata solo    se ricorrono rischi particolari</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">73. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La valutazione dei    rischi derivanti da esposizioni ad agenti fisici:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è aggiornata ogni    qual volta si verifichino mutamenti che potrebbero renderla obsoleta</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">è aggiornata ogni    anno</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è aggiornata ogni    quattro anni</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">occorre farla solo a    inizio attività</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">74. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">In caso di    esposizione dei lavoratori ad agenti fisici i cui valori superino quelli    stabiliti dalle norme:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">il datore di lavoro    adotta misure immediate per riportare l'esposizione al di sotto dei valori    limite di esposizione, individua le cause del&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">del superamento dei    valori limite di esposizione e adegua di conseguenza le misure di protezione    e prevenzione</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">il datore di lavoro    fa intervenire i Vigili del Fuoco</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">il datore di lavoro    si consulta con il RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">viene convocato il    medico competente per effettuare le visite mediche previste</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">75. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Lo strumento per    misurare il rumore si chiama:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">fonometro</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">fotometro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">amperometro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">voltmetro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">76. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">In presenza di    impianti di condizionamento , nei periodi nei quali è necessaria la    refrigerazione dell'aria:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">la differenza di    temperatura tra l'interno e l'esterno deve essere 7° C</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">la differenza di    temperatura tra l'interno e l'esterno deve essere quella stabilita dal medico    competente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">la differenza di    temperatura tra l'interno e l'esterno deve essere 10° C</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">la differenza di    temperatura tra l'interno e l'esterno può essere lasciata alla libera    regolazione del lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">77. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Indicare la risposta    sbagliata. I rischi derivanti da agenti chimici pericolosi devono essere    eliminati o ridotti al minimo mediante:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">limitare    l'esposizione dei lavoratori alle 20 ore settimanali</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">fornitura di    attrezzature idonee per il lavoro specifico e relative procedure di    manutenzione adeguate</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">riduzione al minimo    del numero di lavoratori che sono o potrebbero essere esposti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">progettazione e    organizzazione dei sistemi di lavorazione sul luogo di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">78. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Si possono detenere    tutte le quantità di agenti chimici che si vogliono?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">No, in quanto occorre    ridurre al minimo la quantita' di agenti presenti sul luogo di lavoro in    funzione delle necessita' della lavorazione</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, se si ottiene    apposta autorizzazione della ASL</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Dipende dalla    valutazione del rischio</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">79. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Le attrezzature di    soccorso e di salvataggio:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">non sono DPI</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono DPI</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono DPI solo se    vengono riconosciuti tali</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono DPI solo se di    proprietà del lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">80. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nella prevenzione    degli infortuni si è obbligati a privilegiare:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">quelle misure ed    interventi, di natura tecnica od organizzativa, che abbiano funzioni di    "protezione collettiva"</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">le misure di    protezione come stabilito in sede di riunione periodica</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">quelle misure ed    interventi, di natura tecnica od organizzativa, che abbiano innanzi tutto    funzioni di "protezione individuale"</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">le misure di    protezione così come indicato dalle buone pratiche</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">81. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I Dispositivi di    protezione individuale&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere forniti    dal datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    acquistati dal lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere forniti    dalle ASL</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    regolati secondo quanto definito in sede di riunione periodica</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">82. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I lavoratori:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono obbligati ad    utilizzare correttamente ed a mantenere in buono stato di efficienza i DPI    messi a loro disposizione</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">stabiliscono di volta    in volta se utilizzare i DPI messi a disposizione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">non sono obbligati ad    utilizzare correttamente ed a mantenere in buono stato di efficienza i DPI    messi a loro disposizione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">utilizzano i DPI    secondo quanto definito in sede di riunione periodica</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">83. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I locali destinati a    laboratorio devono essere ubicati fuori terra:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sempre tranne quando    possono essere autorizzati in qualche caso particolare in presenza di    particolari condizioni</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">dipende dalla    valutazione del rischio</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">84. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quando le lavorazioni    diano luogo ad emissioni di agenti nocivi:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">i locali dove    avvengono le lavorazioni non possono essere ubicati in ambienti interrati</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">i locali dove    avvengono le lavorazioni possono essere ubicati in ambienti interrati</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">i locali dove    avvengono le lavorazioni sono sempre ubicati in ambienti interrati</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">i locali dove    avvengono le lavorazioni sono sempre ubicati in ambienti interrati purché    siano attivate le prescritte misure di protezione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">85. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I laboratori devono    presentare un'altezza netta maggiore o uguale a 3 metri:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">solo quando    necessario</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">dipende dalla    valutazione del rischio</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">86. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Valutare la seguente    affermazione: ‘Le porte dei laboratori devono aprirsi agevolmente verso le    vie di esodo’:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è giusta</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">non è giusta perché    le porte dei laboratori devono aprirsi in senso contrario alle vie di esodo</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è parzialmente    corretta poiché dipende dal numero dei lavoratori presenti nel laboratorio</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">non è giusta poiché è    indifferente il senso di apertura</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">87. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Valuta la seguente    affermazione: ‘In presenza di rischio di incendio o di esplosione la    larghezza minima delle porte dei laboratori dovrà&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">essere pari ad almeno    1,20 metri’:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è giusta</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">è parzialmente    corretta poiché dipende dal numero dei lavoratori presenti nel laboratorio</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è errata perché il    valore minimo e 1 metro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">è errata poiché è un    parametro stabilito dal RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">88. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nei laboratori può    essere derogato il rispetto della segnaletica di sicurezza:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">no mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">ove lo ricorrano le    condizioni</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sì se autorizzato dal    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">89. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nei laboratori può    essere derogato l'uso dei dispositivi di protezione individuali:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">mai, se si svolgono    lavorazioni che ne prevedono l'uso</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">la scelta è lasciata    al lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sì se autorizzato dal    datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">90. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nei laboratori deve    essere eseguita la misura di rumorosità delle singole macchine e della    rumorosità complessiva dell'ambiente:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sì</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">dipende dalle    lavorazioni</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">no</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sì se a deciderlo è    il datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">91. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Se in un laboratorio    venissero riscontrati valori di rumorosità al di sopra delle norme:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    effettuati interventi atti a ridurre le rumorosità</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">possono essere    effettuati interventi atti a ridurre le rumorosità</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">il lavoratore    provvede a proteggersi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">non occorre far nulla</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">92. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Per garantire la    sicurezza durante l'uso delle macchine:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    predisposte preliminarmente le disposizioni concernenti l'uso e la    manutenzione delle stesse</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    predisposte, quando necessario, le disposizioni concernenti l'uso e la    manutenzione delle stesse</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">occorre predisporre    le istruzioni d'uso per metterle a disposizione del lavoratore qualora questi    ne avesse bisogno</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">si aspettano gli    ordini del datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">93. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Per garantire la    sicurezza durante l'uso delle attrezzature:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    predisposte preliminarmente le disposizioni concernenti l'uso e la    manutenzione delle stesse</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    predisposte, quando necessario, le disposizioni concernenti l'uso e la    manutenzione delle stesse</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">occorre predisporre    le istruzioni d'uso per metterle a disposizione del lavoratore qualora questi    ne avesse bisogno</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">si aspettano gli    ordini del datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">94. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli elementi    accessibili delle macchine devono:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">nei limiti del    possibile, essere privi di spigoli vivi e di superfici taglienti</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">essere muniti di    spigoli vivi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">essere muniti di    spigoli vivi e di superfici taglienti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">essere muniti di    superfici un po' taglienti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">95. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Valuta la seguente    espressione: ‘Gli organi di collegamento, di fissaggio presenti sugli    elementi in movimento delle macchine non devono&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">sporgere rispetto    alle superfici esterne, ma devono essere inseriti in appositi incavi oppure    ricoperti da manicotti aventi superfici lisce’:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è corretta</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">dipende dalle    lavorazioni</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è sbagliata</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">rappresenta una    facoltà</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">96. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Le macchine che, in    relazione alle loro condizioni di lavoro, presentano dei rischi di rottura    con conseguenti proiezioni di parti di macchina&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">o del materiale in    lavorazione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    provviste di schermi protettivi o di altre idonee misure di sicurezza</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">possono essere    provviste di schermi protettivi o di altre idonee misure di sicurezza se a    richiederlo è il lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">possono essere    provviste di schermi protettivi o di altre idonee misure di sicurezza se    viene deciso in sede di riunione periodica</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">possono essere    provviste di schermi protettivi o di altre idonee misure di sicurezza</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">97. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La macchine devono    essere costruite, installate, mantenute:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">in modo da evitare    vibrazioni e scuotimenti</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">nel rispetto delle    indicazioni del fornitore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">in modo da limitare i    consumi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">a cura del lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">98. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Se la funzione    tecnologica richiede l'utilizzo di una macchina che provoca vibrazioni e    scuotimenti:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    adottate le opportune misure che garantiscano la sicurezza degli edifici e    degli addetti</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">si chiama il datore    di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">si avvertono i vicini</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">si informa la Asl</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">99. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La macchina, dopo    l'eventuale interruzione dell'energia elettrica e la successiva rierogazione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">non deve riavviarsi    automaticamente</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve riavviarsi    automaticamente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">può riavviarsi    automaticamente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve rispettare le    istruzioni del costruttore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">100. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli studenti che    svolgono attività in laboratorio:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    preventivamente informati circa l'uso e l'utilizzo dei dispositivi di    protezione individuale</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">possono essere    preventivamente informati circa l'uso e l'utilizzo dei dispositivi di    protezione individuale</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">potrebbero essere    preventivamente informati circa l'uso e l'utilizzo dei dispositivi di    protezione individuale a seconda delle decisioni del Dir. Scol.</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">possono essere    preventivamente informati circa l'uso e l'utilizzo dei dispositivi di    protezione individuale se lo richiedono</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">101. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I docenti e gli    Assistenti Tecnici:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono vigilare    sull'efficienza dei dispositivi di protezione individuale, sulla loro    manutenzione e sull'uso corretto</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">decidono di volta in    volta se devono vigilare sull'efficienza dei dispositivi di protezione    individuale, sulla loro manutenzione e sull'uso corretto</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">possono vigilare    sull'efficienza dei dispositivi di protezione individuale, sulla loro    manutenzione e sull'uso corretto</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel3" style="border-top:none;border-left:none;">potrebbero vigilare    sull'efficienza dei dispositivi di protezione individuale, sulla loro    manutenzione e sull'uso corretto se a richiederlo è il datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">102. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli impianti    elettrici:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    costruiti, installati e mantenuti in modo da prevenire i pericoli derivanti    da contatti accidentali con gli elementi sotto tensione</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">non devono essere    costruiti, installati e mantenuti in modo da prevenire i pericoli derivanti    da contatti accidentali con gli elementi sotto tensione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">potrebbero essere    costruiti, installati e mantenuti in modo da prevenire i pericoli derivanti    da contatti accidentali con gli elementi sotto tensione&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">se richiesto dal    lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel3" style="border-top:none;border-left:none;">possono essere    costruiti, installati e mantenuti in modo da prevenire i pericoli derivanti    da contatti accidentali con gli elementi sotto tensione se richiesto dal RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">103. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Le lampade ed i    portalampade devono essere costruiti ed installati in modo:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">che sia escluso il    contatto con parti in tensione</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">che sia garantito il    contatto con parti in tensione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">che sia possibile il    contatto con parti in tensione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">che siano rispettate    le indicazioni del datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">104. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli utensili    elettrici portatili e gli apparecchi elettrici mobili devono avere:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">un isolamento    supplementare di sicurezza fra le parti interne in tensione e l'involucro    metallico esterno</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">una buona    ergonomicità</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">l'autorizzazione    all'uso del datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">essere inserite in un    contratto di manutenzione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">105. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I contenitori di    sostanze pericolose:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono portare in    maniera ben visibile l'etichettatura che indichi le caratteristiche della    sostanza</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    lasciati in zona libera</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono tenuti in    archivio</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">possono portare    l'etichettatura che indichi le caratteristiche della sostanza</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">106. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Le cappe aspiranti:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere in    grado di aspirare con efficienza anche gas e vapori pesanti</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere in    grado di aspirare con efficienza solo gas e vapori leggeri</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono aspirare solo    alcuni tipi di gas e vapori</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">non occorrono in un    laboratorio scolastico</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">107. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli studenti:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono comunque    disporre di ambienti e di attrezzature che abbiano i requisiti richiesti    dalla normativa vigente anche se non sono considerati&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">videoterminalisti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel4" style="border-top:none;border-left:none;">non devono mai    disporre di ambienti e di attrezzature che abbiano i requisiti richiesti    dalla normativa vigente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono disporre di    ambienti e di attrezzature che abbiano i requisiti richiesti dalla normativa    vigente solo se considerati videoterminalisti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel4" style="border-top:none;border-left:none;">anche se operano a    videoterminale non sono considerati lavoratori per cui non è necessario    applicare la relativa normativa</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">108. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel4" style="border-top:none;border-left:none;">La tastiera del    videoterminale:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve essere    inclinabile e dissociata dallo schermo</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel4" style="border-top:none;border-left:none;">deve avere il    tastierino alfanumerico</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve essere di tipo    US</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">può essere assemblata    anche con lo schermo</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">109. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il sedile di lavoro:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve essere stabile,    regolabile in altezza e il suo schienale deve essere regolabile in altezza ed    in inclinazione</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve essere rigido</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">può avere 4 rotelle</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">può essere qualsiasi    sedia in quanto lo studente non viene considerato come videoterminalista</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">110. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I conduttori    elettrici flessibili impiegati per l'alimentazione di apparecchi portatili:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono avere un    rivestimento resistente all'usura anche di natura meccanica</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere lunghi    max 1 metro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono solo quelli    autorizzati dal RSPP</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">possono essere di    qualsiasi tipo</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">111. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Durante l'inserimento    o il desinserimento di una spina:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">occorre che sia    evitato il contatto accidentale con le parti in tensione</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">occorre che sia    consentito il contatto accidentale con le parti in tensione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">non occorre che sia    evitato il contatto accidentale con le parti in tensione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">il contatto    accidentale con le parti in tensione è una ipotesi che non si verifica mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">112. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il piano di lavoro    del videoterminalista deve avere:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">una superficie poco    riflettente</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">un piano riflettente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">una superficie bianca</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">una superficie di    laminato</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">113. &nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Lo schermo del    videoterminale deve essere:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">orientabile ed    inclinabile</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">retroilluminato</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">rigido</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">multimediale</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">114</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Le valvole di    intercettazione di gas:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    controllate al termine di ogni lezione</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    controllate al termine della giornata</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    controllate entro l'arco di un mese</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono essere    controllate saltuariamente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">115</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli studenti:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono usare    obbligatoriamente i dispositivi di protezione individuale quando previsto e    segnalare eventuali deficienze degli stessi</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">possono usare    dispositivi di protezione individuale quando lo ritengono opportuno</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">non si devono    preoccupare delle deficienze dei dispositivi di protezione individuale poiché    è compito dell'Assistente Tecnico</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">devono indicare quale    dispositivi di protezione individuale intendono usare</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">116</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Nei luoghi    sotterranei:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vietato installare    o usare generatori e gasometri di acetilene</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">è consigliato    installare o usare generatori e gasometri di acetilene</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">è vietato installare    o usare generatori e gasometri di acetilene solo per grandi quantità</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">è possibile o usare    generatori e gasometri di acetilene dietro autorizzazione del datore di    lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">117</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I Laboratori    scolastici:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono luoghi di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono luoghi di lavoro    solo su indicazione del datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">non rientrano nella    categoria dei luoghi di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">sono luoghi di lavoro    solo nei casi in cui vi si svolgono attività per cui è prevista la    sorveglianza sanitaria</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">118</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il divieto di pulire    o ingrassare manualmente gli elementi in movimento delle macchine e di    compiere operazioni di riparazione o di registrazione:</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve essere    comunicato agli addetti mediante appositi cartelli</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve essere    comunicato ai lavoratori al momento dell'assunzione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">deve essere    comunicato solo oralmente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">vale solo per alcuni    tipi di macchine</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">119</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I lavoratori    incaricati dell'attuazione delle misure di prevenzione antincendio e di primo    soccorso, possono rifiutare la designazione?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">No, se non per    giustificato motivo</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, se non hanno    ancora partecipato allo specifico corso di formazione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">No, mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">120</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quali lavoratori sono    tenuti a partecipare ai programmi di formazione organizzati dal datore di    lavoro?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Tutti i lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il Rappresentante dei    Lavoratori per la Sicurezza (RLS), gli Addetti Antincendio e gli Addetti al    Primo Soccorso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo i Preposti alla    sicurezza</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli Addetti    Antincendio e gli Addetti al Primo Soccorso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">121</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quali Dispositivi di    Protezione Individuale (DPI) il datore di lavoro deve assegnare ai    lavoratori?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel3" style="border-top:none;border-left:none;">I necessari e idonei    dispositivi di Protezione Individuale, sentito il parere del Resp.del Serv.    di Prevenzione e Protezione e il Medico Competente,ove presente</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Le scarpe    antinfortunistiche e i guanti da lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo i Dispositivi di    Protezione Individuale richiesti dai lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo i Dispostivi di    Protezione Individuale indicati dal preposto alla sicurezza</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">122</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">A chi spetta    specificamente sovrintendere e vigilare sull'osservanza da parte dei singoli    lavoratori dei loro obblighi di legge e dell'uso&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">dei dispositivi di    Protezione Individuale?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Al Preposto alla    sicurezza</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Al Medico Competente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Al Responsabile del    Servizio di Prevenzione e Protezione (RSPP)</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Al datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">123</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Su sua richiesta, il    Rappresentante dei Lavoratori per la Sicurezza (RLS) può ricevere dal datore    di lavoro una copia del Documento&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">di valutazione dei    Rischi?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma col consenso    del Responsabile del Servizio di Prevenzione e Protezione e del Medico    Competente</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma solo il    Documento di Valutazione dei Rischi del plesso scolastico in cui opera</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">No, mai</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">124</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sono previsti    finanziamenti per gli istituti scolastici che inseriscono nei loro percorsi    formativi iniziative volte a favorire la conoscenza delle&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">tematiche della    salute e della sicurezza?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, per tutte le    istituzioni scolastiche che attivano i predetti percorsi formativi</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma solo per gli    istituti di secondo grado e per l'Università</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma solo per i    Centri di Formazione Professionale</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">No, per carenza di    risorse finanziarie</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">125</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">La formazione dei    incaricati di svolgere le funzioni di Addetto al Primo Soccorso dovrà essere    ripetuta, per quanto attiene alle capacità di&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;di intervento pratico, con cadenza…</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Triennale</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Biennale</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Annuale</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quinquennale</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">126</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Gli Addetti al    Servizio di Prevenzione e Protezione (ASPP) partecipano all'individuazione    dei fattori di rischio, alla valutazione dei rischi e&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">all'individuazione    delle misure per la sicurezza e la salubrità degli ambienti di lavoro?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">No, perché spetta    esclusivamente al Responsabile del Servizio di Prevenzione e Protezione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">No, perché spetta    solo al datore di lavoro e al Responsabile del Servizio di Prevenzione e    Protezione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">No, perché spetta    solo al datore di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">127</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Il datore di lavoro    programma gli interventi, prende i provvedimenti e dà istruzioni affinché i    lavoratori, in caso di pericolo grave e immediato,&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">abbandonino    immediatamente il luogo di lavoro?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, per ogni tipo di    azienda</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma solo per i    casi di incendio diffuso</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma solo per le    azienda con più di 15 lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma da attuare    sono nel caso in cui si verifichi un terremoto</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">128</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">L'esercizio della    funzione di Rappresentante dei Lavoratori per la Sicurezza (RLS) è    compatibile con la nomina a Responsabile del Servizio di</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Prevenzione e    Protezione (RSPP)?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">No, è incompatibile</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma solo nei casi    di aziende con meno di 15 lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, purché    nell'azienda operino meno di 200 lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">129</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">È vero che per i    lavoratori che non utilizzano in modo appropriato i Dispositivi di Protezione    Individuale (DPI) messi a loro disposizione, sono&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">previste specifiche    sanzioni fino ad un mese o con l'ammenda da 200 a 600 euro?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">È vero, per ogni    ambiente di lavoro</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">È vero, ma la    sanzione è applicata solo nelle aziende private</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">È vero, ma la    sanzione è applicata solo nelle aziende con più di 15 dipendenti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">È vero, ma la    sanzione è limitata a 300 euro</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">130</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quando debbono essere    impiegati i Dispositivi di Protezione Individuale (DPI)?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Quando i rischi non    possono essere evitati o sufficientemente ridotti da misure tecniche di    prevenzione e da mezzi di protezione collettiva</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo se sono a    portata di mano</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo quando lo    ritiene opportuno il lavoratore</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Solo per i rischi    derivanti dalla movimentazione manuale dei carichi</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">131</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Prima che entri un    cantiere a scuola è necessario che l'Ente proprietario dell'edificio, il    Dirigente Scolastico e il Responsabile della Ditta</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">esecutrice dei    lavori, si coordinino tra loro per redigere il Documento Unico di valutazione    dei Rischi interferenziali (D.U.V.R.I.)?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, sempre; per    individuare i Rischi Interferenziali tra i lavori svolti dalla Ditta esterna    e le attività scolastiche, al fine di individuare le idonee&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">misure preventive e    protettive</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">Sì,    ma solo per gli edifici con una presenza superiore a 100 persone</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">No,    solo nei casi in cui sia prevista l'installazione di una impalcatura sulle    pareti esterne dell'edificio</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">No,    vale solo per gli edifici scolastici costruiti prima del 1975</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">132</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Tra le misure    generali di tutela della salute e della sicurezza dei lavoratori nei luoghi    di lavoro è prevista anche un'adeguata informazione e</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">formazione?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, in tutte le    aziende pubbliche e private</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma solo per le    aziende con più di 35 lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma solo atto    dell'assunzione</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, ma solo per le    aziende con più di 15 dipendenti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">133</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">Ciascun    lavoratore deve essere informato sui nominativi dei lavoratori incaricati di    svolgere le funzioni di Addetto Antincendio e di Addetto&nbsp;&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">al    Primo Soccorso?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">Sì,    per qualsiasi tipologia di edificio scolastico</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">Sì,    ma solo per gli edifici scolastici con un numero di persone presenti    superiore a 300 unità</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">Sì,    ma solo per gli edifici scolastici con più di 100 persone presenti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">No,    non è necessario</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel5" style="border-top:none;border-left:none;width:617pt;">134</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">I Dispositivi di    Protezione Individuale (DPI) devono essere forniti dal datore di lavoro senza    onere economico per i lavoratori?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Sì, sempre</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">No ,con un contributo    economico da parte del lavoratore pari al 50%</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">No ,con un contributo    economico da parte del lavoratore pari al 20%</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">No, l'acquisto è a    totale carico dei lavoratori</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">135</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">In quale circostanza    i lavoratori designati di svolgere le funzioni di Addetto Antincendio devono    conseguire l'attestato di idoneità tecnica presso i&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">&nbsp;</td>
    <td class="excel2" style="border-top:none;border-left:none;">Vigili del Fuoco?</td>
    <td class="excel2" style="border-top:none;border-left:none;">&nbsp;</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">1</td>
    <td class="excel2" style="border-top:none;border-left:none;">Se operano in scuole    con oltre 300 persone presenti</td>
    <td class="excel2" style="border-top:none;border-left:none;">esatta</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">2</td>
    <td class="excel2" style="border-top:none;border-left:none;">Se operano in scuole    con un numero di persone presenti comprese fra le 100 e le 300</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">3</td>
    <td class="excel2" style="border-top:none;border-left:none;">Se operano in scuole    con più di 500 persone presenti</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
  <tr style="height:16.5pt;">
    <td class="excel2" style="height:16.5pt;border-top:none;">4</td>
    <td class="excel2" style="border-top:none;border-left:none;">Se il numero di    Addetti Antincendio presenti nell'edificio, per ogni turno di servizio, è    inferiore a 5</td>
    <td class="excel2" style="border-top:none;border-left:none;">errata</td>
  </tr>
</tbody></table>

`

function trimMultiSpaces(s: string): string {
  return s.replace(/\s\s+/g, ' ').trim()
}

export interface QuestionChoice {
  id: number,
  text: string,
  correct: boolean
}
export interface Question {
  id: number,
  text: string,
  choices: Array<QuestionChoice>
}

export function parseHTML(): Array<Partial<Question>> {
  let questions: Array<Partial<Question>> = []

  const doc = parse(html)
  const table = doc.getElementsByTagName("table")[0]
  const tbody = table.getElementsByTagName("tbody")[0]
  const rows = tbody.getElementsByTagName("tr")

  let question: Partial<Question> = {}
  for (const row of rows) {
    const [first, second, third] = row.getElementsByTagName("td")

    const firstText = first.textContent.trim()
    const secondText = second.textContent.trim()
    const thirdText = third.textContent.trim()

    // console.log(question.choices.length, " sdsd")
    // if (firstText === "" && secondText !== "" && thirdText === "" && secondText.endsWith(".")) {
    if (firstText === "" && secondText !== "" && thirdText === "") {
      // new question or question text
      const questionId = parseInt(secondText)
      if (Number.isInteger(questionId)) {
        questions.push({ ...question })
        question.id = questionId
        question = { id: questionId }
        continue
      }
      if (!question.choices) {
        question.text = trimMultiSpaces(question.text ? `${question.text} ${secondText}` : secondText)
      } else {
        question.choices[question.choices.length - 1].text = trimMultiSpaces(`${question.choices[question.choices.length - 1].text} ${secondText}`)
      }
    } else {
      // question choice row
      if (!question.choices) question.choices = []
      let choiceNumber = parseInt(firstText)
      if (Number.isInteger(choiceNumber)) {
        question.choices.push({
          id: choiceNumber,
          text: trimMultiSpaces(secondText),
          correct: thirdText === "esatta"
        })
      } else {
        // unreachable
        question.choices[question.choices.length - 1].text = trimMultiSpaces(`${question.choices[question.choices.length - 1].text} ${secondText}`)
      }
    }
  }

  questions.shift()
  return questions
}
