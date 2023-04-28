<template>
  <div w-full overflow-auto h-screen>
    <table>
      <thead>
        <tr>
          <td colspan="8">
            <div>
              <div my-8px>
                <div w-100vw sticky left-0 text-center>
                  <img src="/public/cb-logo.svg" w-150px md:w-250px lg:w-300px alt="CryptoByte logo" mx-auto>
                </div>
                <h1 w-100vw sticky left-0 font-exo text-2xl md:text-4xl text-center mb-16px>
                  Program 2023
                </h1>
                <div w-100vw sticky left-0 flex gap-4 justify-center my-4>
                  <Printer />
                  <QrCode />
                </div>
                <div w-100vw sticky left-0 text-center flex flex-wrap justify-center gap-8px text-app-blue text-xs>
                  <div flex justify-start>
                    <LegendItem format="intro" />
                  </div>
                  <div flex justify-start>
                    <LegendItem format="presentation" />
                  </div>
                  <div flex justify-start>
                    <LegendItem format="panel" />
                  </div>
                  <div flex justify-start>
                    <LegendItem format="workshop" />
                  </div>
                  <div flex justify-start>
                    <LegendItem format="side" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <BasePopupWrapper>
                wrapper
              </BasePopupWrapper>
            </div>
          </td>
        </tr>
        <tr>
          <th class="w-50px">
&nbsp;
          </th>
          <th>Simplecoin<br>stage</th>
          <th>Whalebooks<br>stage</th>
          <th>Callisto<br>stage</th>
          <th>Štosuj<br>workshops</th>
          <th>FireFish<br>workshops</th>
          <th>Foyer</th>
          <th>Univerzitní<br>nám.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="leftth twenty">
            9:30
          </th>
          <Talk id="zahajeni" />
        </tr>
        <tr>
          <th class="leftth fourty">
            10:00
          </th>
          <Talk id="kovanda" />
          <Talk id="juran" />
          <Talk id="lucassiscze" />
          <Talk id="w-bok" />
          <Talk id="w-rydvan" />
          <Talk id="foyer-1" />
          <Talk id="namesti" />
        </tr>
        <tr>
          <th leftth twenty>
            10:40
          </th>
          <td break colspan="5">
            <span sticky left-50px pl-1>Přestávka</span>
          </td>
        </tr>
        <tr>
          <th leftth fourty>
            11:00
          </th>
          <Talk id="niedoba" />
          <Talk id="bednar" />
          <Talk id="svarz" />
          <Talk id="w-juran" />
          <Talk id="w-varga" />
        </tr>
        <tr>
          <th leftth twenty>
            11:40
          </th>
          <td break colspan="5">
            <span sticky left-50px pl-1>Přestávka</span>
          </td>
        </tr>
        <tr>
          <th leftth fourty>
            12:00
          </th>
          <Talk id="kicom" />
          <Talk id="petrasova" />
          <Talk id="matejka" />
          <Talk id="w-dvorak" />
          <Talk id="w-zapletal" />
        </tr>
        <tr>
          <th leftth twenty>
            12:40
          </th>
        </tr>
        <tr>
          <th leftth twenty>
            13:00
          </th>
          <td break colspan="5">
            <span sticky left-50px pl-1>Přestávka</span>
          </td>
          <Talk id="foyer-2" />
        </tr>
        <tr>
          <th class="leftth h40">
            13:20
          </th>
          <Talk id="panel-1" />
          <Talk id="kyrsch" />
          <Talk id="habovstiak" />
          <Talk id="w-cernansky" />
          <Talk id="w-matejka" />
        </tr>
        <tr>
          <th class="leftth twenty">
            14:00
          </th>
        </tr>
        <tr>
          <th class="leftth twenty">
            14:20
          </th>
          <td break colspan="5">
            <span sticky left-50px pl-1>Přestávka</span>
          </td>
        </tr>
        <tr>
          <th class="leftth fourty">
            14:40
          </th>
          <Talk id="panel-2" />
          <Talk id="kovarik" />
          <Talk id="bures" />
          <Talk id="w-varga-2" />
          <Talk id="w-cerny" />
        </tr>
        <tr>
          <th class="leftth">
            15:20
          </th>
          <td class="prestavka" colspan="4">
            <span>&nbsp;</span>
          </td>
        </tr>
        <tr>
          <th class="leftth twenty">
            15:40
          </th>
          <td break colspan="5">
            <span sticky left-50px pl-1>Přestávka</span>
          </td>
        </tr>
        <tr>
          <th class="leftth fourty">
            16:00
          </th>
          <Talk id="tetek" />
          <Talk id="kryptomates" />
          <Talk id="novak" />
          <Talk id="w-kovarik" />
          <Talk id="w-zapletal-2" />
        </tr>
        <tr>
          <th class="leftth twenty">
            16:40
          </th>
          <td break colspan="5">
            <span sticky left-50px pl-1>Přestávka</span>
          </td>
        </tr>
        <tr>
          <th class="leftth fourty">
            17:00
          </th>
          <Talk id="luptak" />
          <Talk id="bednar2" />
          <Talk id="panel-3" />
          <Talk id="w-bures" />
          <Talk id="w14" />
        </tr>
        <tr>
          <th leftth twenty>
            17:40
          </th>
          <td colspan="2">
            <span>&nbsp;</span>
          </td>
        </tr>
        <tr>
          <td colspan="8">
            <div my-4>
              <div w-100vw sticky left-0 text-center text-app-blue font-exo text-xs>
                <div>
                  <NuxtLink to="https://develit.io/" target="_blank">
                    <img src="/public/logo-develit-color-on-transparent.svg" w-120px md:w-150px lg:w-150px alt="Develit logo" mx-auto hover:scale-105 duration-200>
                  </NuxtLink>
                </div>
                <div block p-4>
                  Program pro CryptoByte 2023 s radostí vytvořil tým <NuxtLink to="https://develit.io/" target="_blank" dashedlink>
                    Develit.io
                  </NuxtLink>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
white-space: nowrap;
margin: 0;
border: none;
border-collapse: separate;
border-spacing: 0;
table-layout: fixed;
border: 0;
}
table td,
table th {
border: 1px solid white;
}
table thead th {
padding: 8px 4px;
position: sticky;
top: 0;
z-index: 1;
width: 25vw;
background: #282b57;
color: #fff;
}
table thead th:first-child {
position: sticky;
left: 0;
z-index: 2;
}
table tbody th {
position: sticky;
left: 0;
background: #ddd;
z-index: 1;
}
</style>
