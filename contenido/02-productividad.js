(window.UNIDADES ||= []).push({
  id: "productividad",
  num: 2,
  tema: "productividad",
  titulo: "Productividad primaria y controles del clima",
  bajada: "Qué limita la fijación de carbono, desde la hoja hasta el planeta, y qué factores explican el clima de cada lugar.",
  programa: "b) Controles de la productividad primaria neta. Implicancias en los sistemas de producción.",
  clases: ["2 · Factores de productividad (J. Aranibar)"],
  resumen: `
    <ul>
      <li><b>PPN = PPB − R</b>: es el carbono fijado por fotosíntesis menos el respirado por las plantas. Se expresa en g C m⁻² año⁻¹.</li>
      <li>A escala de la hoja, la fotosíntesis la limitan la <b>luz</b>, la <b>temperatura</b>, el <b>agua</b> (vía los estomas), el <b>CO₂</b> y el <b>N</b>.</li>
      <li>A escala global y regional, la PPN la controla sobre todo el <b>clima</b> (temperatura, precipitación y estacionalidad). A escala local, la <b>geomorfología</b> y la <b>biodiversidad</b>.</li>
      <li>La <b>temperatura</b> depende de la latitud (el ángulo de incidencia), la altitud, la continentalidad, las corrientes marinas, el albedo y los GEI.</li>
      <li>La <b>precipitación</b> depende de los centros de presión (baja en el ecuador y a 60°, alta a 30°), de la orografía, de las corrientes marinas y de fenómenos como El Niño.</li>
    </ul>`,
  secciones: [
    {
      id: "pro-def",
      titulo: "¿Qué es la productividad primaria neta?",
      html: `
        <p>La <b>productividad primaria neta (PPN)</b> es la cantidad de energía o de carbono fijada por la fotosíntesis, restando lo consumido por la respiración de las propias plantas (respiración mitocondrial y fotorrespiración).</p>
        <p class="formula">PPN = PPB − R<sub>autótrofa</sub></p>
        <ul>
          <li><b>PPB</b> (productividad primaria bruta, o <i>GPP</i>): todo el C fijado por la fotosíntesis.</li>
          <li><b>R</b>: el C que las plantas devuelven a la atmósfera por respiración, aproximadamente la mitad de la PPB.</li>
          <li><b>Unidades:</b> masa de C (o de materia seca) por superficie y por tiempo, por ejemplo g C m⁻² año⁻¹ o kg C ha⁻¹ año⁻¹.</li>
        </ul>
        <p>La PPN es la <b>base energética</b> de todo el ecosistema: alimenta a los herbívoros y descomponedores, determina cuánto ganado puede sostener un campo y cuánto carbono se acumula en biomasa y suelo.</p>
        <div class="ejemplo"><b>Órdenes de magnitud</b>
          <p>Selvas tropicales: ≈ 1.000-1.200 g C m⁻² año⁻¹. Pastizales templados: ≈ 300-500. Desiertos: &lt; 100. La PPN terrestre global es de ≈ 55-60 Pg C año⁻¹.</p>
        </div>
        <div class="idea"><b>Relación con la teledetección</b>
          <p>La PPN se puede estimar desde satélites con el modelo de eficiencia de uso de la radiación (Monteith): <b>PPN ≈ ε × RFA × fRFA</b>, donde la fracción de radiación absorbida (fRFA) se estima con el <a href="#" data-unidad="teledeteccion" data-seccion="tel-ndvi">NDVI</a>. Por eso el NDVI integrado en el año es un buen indicador de la PPN.</p>
        </div>`,
    },
    {
      id: "pro-celular",
      titulo: "Qué regula la fotosíntesis (escala celular y de la hoja)",
      html: `
        <p>Lo que limita la fotosíntesis en una hoja también limita la PPN del ecosistema, si se suma en el espacio y en el tiempo:</p>
        <div class="tabla-wrap"><table class="tabla">
          <tr><th>Factor</th><th>Respuesta</th><th>Por qué</th></tr>
          <tr><td><b>Temperatura</b></td><td>Curva con forma de campana: aumenta hasta un óptimo y luego cae bruscamente.</td><td>Las enzimas (como Rubisco) aceleran con la T hasta desnaturalizarse. Además, a mayor T aumentan la respiración y la fotorrespiración.</td></tr>
          <tr><td><b>Luz (irradiancia)</b></td><td>Aumenta hasta saturarse. Con mucha luz puede haber fotooxidación.</td><td>Por debajo del <i>punto de compensación</i>, la respiración supera a la fotosíntesis. Con luz alta, el límite pasa a ser la fijación de C.</td></tr>
          <tr><td><b>Agua (déficit de presión de vapor)</b></td><td>Disminuye a medida que aumenta el déficit de presión de vapor (DPV).</td><td>Con aire seco, la planta cierra los estomas para no perder agua y entonces entra menos CO₂: hay un <b>compromiso agua-carbono</b>.</td></tr>
          <tr><td><b>CO₂</b></td><td>Aumenta hasta saturarse.</td><td>Es el sustrato de la Rubisco. Por encima de cierta concentración, las enzimas ya trabajan al máximo.</td></tr>
          <tr><td><b>Nitrógeno</b></td><td>Relación lineal con el contenido de Rubisco.</td><td>La Rubisco es la proteína más abundante y rica en N. Más N foliar permite más capacidad fotosintética.</td></tr>
        </table></div>
        <figure class="fig"><img src="img/fotosintesis.jpg" alt="Curvas de respuesta de la fotosíntesis a temperatura, luz, déficit de presión de vapor y CO2" loading="lazy"><figcaption>Respuesta de la fotosíntesis a la temperatura, la irradiancia, el déficit de presión de vapor y el CO₂. (Clase 2 · Factores de productividad)</figcaption></figure>
        <p>En la clase se mostraron mediciones de torres de flujo (calor latente e intercambio neto de C) del modelo de PPN de Aranibar et al. (2006). Muestran cómo el agua y el carbono están acoplados a escala de ecosistema.</p>`,
    },
    {
      id: "pro-clima",
      titulo: "El clima como control principal",
      html: `
        <p>A escala global y regional, la PPN está regulada principalmente por el <b>clima</b>: el conjunto de condiciones atmosféricas promedio (temperatura, humedad, precipitación) de un lugar durante un período prolongado, de <b>más de 30 años</b>. Esas series se llaman “normales climáticas” y en Argentina las publica el Servicio Meteorológico Nacional (SMN).</p>
        <div class="ojo"><b>Clima ≠ tiempo meteorológico.</b> <p>El tiempo es el estado de la atmósfera en un momento dado (hoy llueve). El clima es la estadística de largo plazo (en enero llueve en promedio X mm).</p></div>
        <h4>Controles de la temperatura</h4>
        <ul>
          <li><b>Latitud (ángulo de incidencia de la radiación):</b> en el ecuador los rayos llegan casi perpendiculares y la energía se concentra en menos superficie, por lo que la T es mayor. En los polos llegan oblicuos y recorren más atmósfera, por lo que la T es menor.</li>
          <li><b>Estacionalidad:</b> la inclinación del eje terrestre (≈ 23,5°) cambia el ángulo de incidencia y la duración del día a lo largo del año.</li>
          <li><b>Altitud:</b> la temperatura disminuye ≈ 6,5 °C cada 1.000 m (gradiente térmico vertical).</li>
          <li><b>Continentalidad:</b> el agua tiene alto calor específico y modera la temperatura. Las costas tienen menor amplitud térmica que el interior de los continentes.</li>
          <li><b>Corrientes marinas:</b> una corriente fría (como la de Humboldt o la de Malvinas) enfría la costa; una cálida (como la de Brasil) la templa.</li>
          <li><b>Albedo y retroalimentaciones:</b> el hielo y la nieve reflejan mucha radiación, por lo que se absorbe menos y la T es menor. El agua líquida y los bosques absorben más. Si el hielo se derrite, baja el albedo, se absorbe más y se derrite más hielo: es una retroalimentación positiva.</li>
          <li><b>Gases de efecto invernadero</b> (CO₂, CH₄, N₂O, vapor de agua): absorben la radiación infrarroja que emite la Tierra y aumentan la temperatura.</li>
        </ul>
        <h4>Controles de la precipitación</h4>
        <p>La precipitación es cualquier forma de agua, líquida o sólida, que cae de la atmósfera a la superficie. Se forma por <b>condensación del vapor de agua</b> cuando una masa de aire es forzada a <b>elevarse y enfriarse</b>. Para eso hacen falta vapor de agua y núcleos de condensación (aerosoles).</p>
        <p>Según el mecanismo que eleva el aire, hay cuatro tipos de lluvia:</p>
        <div class="cols">
          <div class="col"><h5>Convectivas</h5><p>El suelo caliente calienta el aire, que asciende. Son típicas de áreas ecuatoriales y de las tormentas de verano.</p></div>
          <div class="col"><h5>Orográficas</h5><p>Una montaña obliga al aire húmedo a subir. Son frecuentes en el NOA y en los Andes patagónicos.</p></div>
          <div class="col"><h5>Frontales</h5><p>Una masa de aire frío obliga a subir al aire cálido. Son importantes en latitudes medias.</p></div>
          <div class="col"><h5>Por convergencia</h5><p>Vientos que convergen obligan al aire a ascender. Ocurren en la ZCIT (alisios) y también en valles de noche.</p></div>
        </div>
        <figure class="fig"><img src="img/tipos_lluvia.jpg" alt="Tipos de lluvias: convectivas, orográficas, frontales y por convergencia" loading="lazy"><figcaption>Los cuatro mecanismos de elevación del aire que generan precipitación. (Clase 2)</figcaption></figure>`,
    },
    {
      id: "pro-circulacion",
      titulo: "Circulación general de la atmósfera",
      html: `
        <p>El calentamiento desigual entre el ecuador y los polos, combinado con la rotación terrestre (fuerza de Coriolis), organiza la atmósfera en <b>tres celdas por hemisferio</b>:</p>
        <ul>
          <li><b>Celda de Hadley (0-30°):</b> en el ecuador el aire caliente y húmedo <b>asciende</b>, formando un cinturón de <b>baja presión</b> con lluvias abundantes: las selvas. A ≈ 30° el aire, ya seco, <b>desciende</b>, formando un cinturón de <b>alta presión</b> (subsidencia) con pocas lluvias: los <b>desiertos</b> (Sahara, Atacama, Kalahari, Australia). El aire vuelve hacia el ecuador como vientos <b>alisios</b>.</li>
          <li><b>Celda de Ferrel (30-60°):</b> hay vientos del oeste en superficie. A ≈ 60° el aire asciende en el frente polar, un cinturón de bajas presiones migratorias con lluvias frontales.</li>
          <li><b>Celda polar (60-90°):</b> el aire frío desciende en los polos (alta presión, desiertos fríos).</li>
        </ul>
        <figure class="fig"><img src="img/celdas.jpg" alt="Celdas de Hadley, Ferrel y polar" loading="lazy"><figcaption>Modelo de tres celdas: ascenso cálido y húmedo en el ecuador y a 60°, descenso frío y seco a 30° y en los polos. (Clase 2)</figcaption></figure>
        <div class="idea"><b>Zona de Convergencia Intertropical (ZCIT)</b>
          <p>Es la franja de bajas presiones donde convergen los alisios de ambos hemisferios. <b>Oscila</b> hacia el hemisferio que está en verano, y por eso muchas regiones tropicales tienen una estación lluviosa y otra seca. Los <b>anticiclones semipermanentes</b> del Pacífico Sur y del Atlántico Sur (≈ 30° S) también se desplazan con ella.</p>
        </div>
        <h4>Corrientes marinas y circulación termohalina</h4>
        <p>Los vientos mueven el agua superficial y generan las corrientes marinas. Además, las diferencias de <b>temperatura y salinidad</b> (y por lo tanto de densidad) generan la <b>circulación termohalina</b>, una “cinta transportadora” global: en los polos el agua fría y salada se hunde (formación de agua profunda) y recorre los océanos. Esta circulación redistribuye el calor del planeta y afecta las temperaturas y precipitaciones locales. El derretimiento de hielo, al agregar agua dulce, podría debilitarla.</p>
        <figure class="fig chica"><img src="img/termohalina.jpg" alt="Circulación termohalina" loading="lazy"><figcaption>Circulación termohalina: corrientes superficiales (rojo) y profundas (azul). (Clase 2)</figcaption></figure>
        <h4>El Niño - Oscilación Sur (ENSO)</h4>
        <p>En condiciones normales, los alisios empujan el agua cálida del Pacífico ecuatorial hacia Oceanía, y frente a Perú aflora agua fría (surgencia, corriente de Humboldt). En un evento de <b>El Niño</b>, los alisios se debilitan, el agua cálida se desplaza hacia Sudamérica y se reorganiza la circulación atmosférica. Se monitorea con la temperatura del mar (SST) y con el índice de oscilación del sur (SOI).</p>
        <ul>
          <li><b>El Niño en Argentina:</b> lluvias por encima de lo normal en el noreste y el litoral (riesgo de inundaciones) y mayores nevadas en los Andes centrales.</li>
          <li><b>La Niña:</b> tiende a producir sequías en la región pampeana.</li>
        </ul>
        <p>Es un ejemplo de <b>variable lenta y teleconexión climática</b> (ver <a href="#" data-unidad="escalas" data-seccion="esc-macrosistemas">macrosistemas</a>).</p>
        <h4>Estacionalidad</h4>
        <p>Como el eje terrestre está inclinado, a lo largo del año cambian el ángulo de incidencia y la duración del día, y con ellos la temperatura, la luz y, en muchas regiones, las lluvias (que siguen a la ZCIT o a los anticiclones). La PPN se concentra en la estación donde coinciden temperatura favorable y agua disponible. Los <a href="#" data-unidad="clima" data-seccion="cli-climograma">climogramas</a> reflejan esa estacionalidad.</p>
        <figure class="fig chica"><img src="img/estacionalidad.jpg" alt="Inclinación del eje terrestre y estaciones" loading="lazy"><figcaption>La oblicuidad del eje genera las estaciones. (Clase 2)</figcaption></figure>`,
    },
    {
      id: "pro-local",
      titulo: "Controles locales: relieve y montañas",
      html: `
        <p>Las montañas modifican la temperatura y la precipitación que se esperarían a escala global, y generan <b>gradientes altitudinales</b>:</p>
        <ul>
          <li><b>Barlovento</b> (la ladera que recibe el viento húmedo): el aire asciende, se enfría y llueve. Por ejemplo, la ladera oriental del Aconquija en Tucumán, con selva de Yungas.</li>
          <li><b>Sotavento</b> (la ladera opuesta): el aire que desciende ya perdió su humedad y se calienta por compresión. Se forma una “<b>sombra de lluvia</b>”, como en el valle de Santa María (árido).</li>
          <li><b>Viento Zonda:</b> el aire del Pacífico descarga nieve y lluvia en Chile y en la cordillera, y baja seco y caliente sobre Mendoza y San Juan (efecto Foehn).</li>
        </ul>
        <figure class="fig"><img src="img/orografica.jpg" alt="Precipitación orográfica en el Aconquija y viento Zonda" loading="lazy"><figcaption>Arriba: precipitaciones orográficas en el Aconquija (Tucumán-Catamarca). Abajo: formación del viento Zonda. (Clase 2)</figcaption></figure>
        <div class="idea"><b>¿Qué controla las precipitaciones en Argentina?</b>
          <ul>
            <li><b>En el norte y centro</b>, la humedad viene del <b>Atlántico</b> y de la Amazonía (anticiclón del Atlántico y vientos del NE). Por eso las lluvias <b>disminuyen de este a oeste</b>: de unos 2.000 mm en Misiones a menos de 200 mm en el Monte. Allí llueve en verano.</li>
            <li><b>En Patagonia</b>, la humedad viene del <b>Pacífico</b> con los vientos del oeste. Los Andes la descargan y por eso las lluvias <b>disminuyen de oeste a este</b>: bosques andino-patagónicos y luego estepa. Allí llueve en invierno.</li>
            <li>Entre ambos sistemas queda la <b>diagonal árida</b> (Puna, Monte, Patagonia extraandina).</li>
          </ul>
        </div>`,
    },
    {
      id: "pro-geomorfologia",
      titulo: "Geomorfología y biodiversidad como controles",
      html: `
        <h4>Geomorfología</h4>
        <p>La geomorfología estudia la forma de la superficie terrestre (montañas, valles, llanuras, costas), su origen y los procesos que la modelan. Afecta la PPN porque redistribuye el agua, la energía y los nutrientes:</p>
        <ul>
          <li><b>Exposición de la ladera:</b> en el hemisferio sur, las laderas que miran al <b>norte</b> (solanas) reciben más radiación y son más cálidas y secas, con más evaporación. Las que miran al <b>sur</b> (umbrías) son más frescas y húmedas, con más humedad en el suelo.</li>
          <li><b>Relieve:</b> afecta la profundidad del suelo. Es delgado en las crestas y pendientes (por erosión) y profundo en los valles (por acumulación).</li>
          <li><b>Volcanes:</b> las cenizas aportan nutrientes y forman suelos fértiles.</li>
          <li><b>Médanos e intermédanos</b> (como en Telteca, Lavalle): los valles intermédanos acumulan agua y finos, y a veces la napa está accesible. Allí se concentran los algarrobos, mientras que en las crestas y flancos de los médanos la vegetación es más rala.</li>
        </ul>
        <h4>Biodiversidad</h4>
        <p>Algunos estudios muestran que la biodiversidad puede <b>aumentar la PPN</b> porque optimiza el uso de los recursos (luz, agua, nutrientes, espacio):</p>
        <ul>
          <li><b>Complementariedad de nicho:</b> las especies con raíces a distinta profundidad, distinta fenología o distinto tipo de fotosíntesis (C3/C4) usan recursos diferentes, de modo que la comunidad captura más en total.</li>
          <li><b>Facilitación (plantas nodriza):</b> un arbusto o árbol mejora el microambiente bajo su copa (sombra, humedad, nutrientes) y permite que otras plantas se establezcan. Es muy común en zonas áridas: por ejemplo, los algarrobos y los pastos bajo su copa.</li>
          <li><b>Efecto de la especie dominante</b> (mass ratio): la alternativa es que la productividad dependa sobre todo de los rasgos de las especies dominantes.</li>
        </ul>
        <div class="ejemplo"><b>Ejemplo local</b> <p>En los bosques de algarrobo del Monte central, Magnano et al. (2023) encontraron que la intensidad de uso cerca de los puestos ganaderos reduce la diversidad taxonómica y funcional de leñosas <b>y</b> el carbono almacenado. Esto apoya la idea de la complementariedad de nicho.</p></div>`,
    },
    {
      id: "pro-produccion",
      titulo: "Implicancias en los sistemas de producción",
      html: `
        <ul>
          <li><b>Ganadería:</b> la PPN forrajera determina la <b>receptividad</b> o carga animal sostenible. Si se supera, viene el sobrepastoreo, que reduce la cobertura y produce erosión y desertificación.</li>
          <li><b>Agricultura:</b> el rendimiento depende del período libre de heladas, del balance hídrico (que se ve en el climograma) y de la radiación. En zonas áridas la producción depende del <b>riego</b>: los oasis de Mendoza dependen del agua de deshielo.</li>
          <li><b>Forestal:</b> la productividad de madera en el Monte es muy baja (Alvarez et al., 2011). Por eso la extracción de leña debe regularse para no degradar el bosque.</li>
          <li><b>En zonas áridas, la PPN aumenta casi linealmente con la precipitación anual</b>: el agua es el principal limitante. En zonas húmedas pasan a limitar la temperatura, la luz o los nutrientes.</li>
          <li><b>Cambio climático:</b> al modificar la T, las lluvias y su estacionalidad, cambia dónde y cuánto se puede producir. Esto se discute en el <a href="#" data-unidad="clima" data-seccion="tp">TP 2</a> (por ejemplo, la vid en Mendoza).</li>
        </ul>`,
    },
  ],
  practica: [
    {
      p: "¿Cuáles son los principales controles del clima a escala global y local? Explique qué variables afectan y cómo. (Parcial 2022, 2 puntos)",
      r: `<p><b>Escala global:</b></p>
        <ul>
          <li><b>Latitud</b> (el ángulo de incidencia de la radiación). Afecta la temperatura: es mayor en el ecuador y menor en los polos.</li>
          <li><b>Circulación general de la atmósfera</b> (celdas de Hadley, Ferrel y polar). Afecta la precipitación: hay bajas presiones con ascenso y lluvia en el ecuador y a 60°, y altas presiones con subsidencia y aridez a 30° y en los polos.</li>
          <li><b>Inclinación del eje</b> (estacionalidad). Afecta la T, la luz y las lluvias a lo largo del año, incluida la migración de la ZCIT.</li>
          <li><b>Corrientes marinas y circulación termohalina.</b> Afectan la T y la P: redistribuyen el calor, y las corrientes frías generan aridez costera.</li>
          <li><b>Albedo y GEI.</b> Afectan el balance de energía y por lo tanto la temperatura.</li>
          <li><b>ENSO.</b> Genera variabilidad interanual de la P y la T.</li>
        </ul>
        <p><b>Escala local:</b></p>
        <ul>
          <li><b>Altitud.</b> La T baja ≈ 6,5 °C/km.</li>
          <li><b>Relieve y orografía.</b> Hay lluvias a barlovento y sombra de lluvia a sotavento (como el Zonda).</li>
          <li><b>Exposición.</b> En el hemisferio sur, las laderas N son más cálidas y secas.</li>
          <li><b>Continentalidad o distancia al mar.</b> Afecta la amplitud térmica.</li>
          <li><b>Cobertura del suelo.</b> Influye en el albedo, la evapotranspiración y el microclima.</li>
        </ul>`,
    },
    {
      p: "¿Por qué hay desiertos alrededor de los 30° de latitud?",
      r: `<p>Porque allí desciende el aire de la celda de Hadley, que ya perdió su humedad al ascender y llover en el ecuador. Al descender se comprime y se calienta, y se forma un cinturón de alta presión (subsidencia) que inhibe la formación de nubes y lluvias.</p>`,
    },
    {
      p: "Explicá por qué en el NOA hay selva de Yungas en la ladera oriental de las sierras y zonas áridas detrás de ellas.",
      r: `<p>Por la precipitación orográfica. Los vientos húmedos del este y noreste chocan con las sierras y ascienden por la ladera de barlovento, se enfrían y descargan lluvia, lo que permite la selva de Yungas. Al pasar a sotavento, el aire ya está seco y desciende calentándose, y se genera una sombra de lluvia (por ejemplo, el valle de Santa María, árido).</p>`,
    },
    {
      p: "¿Qué factores regulan la fotosíntesis a escala de hoja y cómo se trasladan a la PPN del ecosistema?",
      r: `<p>La luz (con saturación), la temperatura (con un óptimo), el agua (el cierre estomático al aumentar el DPV reduce la entrada de CO₂), el CO₂ (con saturación) y el N (que limita la cantidad de Rubisco). A escala de ecosistema, esos limitantes se integran en el espacio y en el tiempo. La PPN depende de cuánto tiempo del año coinciden la temperatura adecuada y el agua disponible (la estación de crecimiento), de la superficie foliar y de la disponibilidad de nutrientes.</p>`,
    },
    {
      p: "¿Cómo puede la biodiversidad aumentar la PPN? Da dos mecanismos.",
      r: `<p>(1) <b>Complementariedad de nicho:</b> las especies que usan recursos distintos (raíces a distintas profundidades, fenologías desfasadas) capturan en conjunto más recursos. (2) <b>Facilitación:</b> las plantas nodriza mejoran el microambiente y permiten que otras crezcan, lo que aumenta la cobertura y la productividad total.</p>`,
    },
  ],
  glosario: [
    ["PPB", "Productividad primaria bruta: el C total fijado por la fotosíntesis."],
    ["PPN", "PPB menos la respiración autótrofa. Es la base energética del ecosistema."],
    ["Clima", "Promedio de las condiciones atmosféricas de un lugar durante más de 30 años."],
    ["ZCIT", "Zona de Convergencia Intertropical: cinturón de bajas presiones y lluvias que migra con las estaciones."],
    ["Subsidencia", "Descenso de aire que se calienta por compresión e inhibe las lluvias (alta presión)."],
    ["Sombra de lluvia", "Zona seca a sotavento de una montaña."],
    ["Albedo", "Fracción de la radiación que refleja una superficie (la nieve tiene un albedo alto y el bosque uno bajo)."],
    ["Circulación termohalina", "Circulación oceánica impulsada por diferencias de temperatura y salinidad."],
    ["ENSO", "El Niño - Oscilación Sur: variabilidad acoplada océano-atmósfera en el Pacífico ecuatorial."],
  ],
  biblio: [
    "Strahler, A. (2013). <i>Introducing Physical Geography</i>. Wiley. (Clima, circulación general, precipitación)",
    "Sarochar, H. E. Eventos climáticos a escala global (El Niño, ozono, calentamiento global). Apunte UNLP.",
    "INTA (2010). Atlas climático digital de la República Argentina.",
    "Magnano, A. L. et al. (2023). Relationships between land-use intensity, woody species diversity, and carbon storage in an arid woodland ecosystem. <i>For. Ecol. Manage.</i> 529: 120747.",
  ],
});
