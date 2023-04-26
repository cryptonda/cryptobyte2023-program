<template>
  <div min-w-760px>
    <div>
      <div w-100vw sticky left-0 text-center mt-8px>
        <img src="/public/cb-logo.svg" w-150px md:w-250px lg:w-300px alt="CryptoByte logo" mx-auto>
      </div>
      <h1 w-100vw sticky left-0 font-exo text-2xl md:text-4xl text-center mb-16px>
        Program 2023
      </h1>
      <div w-100vw sticky left-0 text-center flex justify-center gap-8px text-app-blue text-xs>
        <div>Legenda:</div>
        <div flex justify-start>
          <div bg-app-intro opacity-50 my-auto mx-4px w-10px h-10px rounded-4px /> <div>zahájení</div>
        </div>
        <div flex justify-start>
          <div bg-app-presentation opacity-50 my-auto mx-4px w-10px h-10px rounded-4px /> <div>přednáška</div>
        </div>
        <div flex justify-start>
          <div bg-app-workshop opacity-50 my-auto mx-4px w-10px h-10px rounded-4px /> <div>workshop</div>
        </div>
        <div flex justify-start>
          <div bg-app-panel opacity-50 my-auto mx-4px w-10px h-10px rounded-4px /> <div>panel</div>
        </div>
      </div>
    </div>
  </div>

  <div my-16px>
    <table>
      <thead>
        <tr>
          <th class="w-50px">
&nbsp;
          </th>
          <th>Simplecoin stage</th>
          <th>Whalebooks stage</th>
          <th>Callisto stage</th>
          <th>Štosuj workshops</th>
          <th>FireFish workshops</th>
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
          <Talk id="w1" />
          <Talk id="w2" />
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
          <Talk id="w3" />
          <Talk id="w4" />
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
          <Talk id="w5" />
          <Talk id="w6" />
        </tr>
        <tr>
          <th leftth fourty>
            12:40
          </th>
          <td break colspan="5">
            <span sticky left-50px pl-1>Přestávka</span>
          </td>
        </tr>
        <tr>
          <th class="leftth h40">
            13:20
          </th>
          <Talk id="panel-1" rowspan="2" />
          <Talk id="kovarik" />
          <Talk id="habovstiak" />
          <Talk id="w7" rowspan="2" />
          <Talk id="w8" rowspan="2" />
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
          <Talk id="panel-2" rowspan="2" />
          <Talk id="kryptomates" />
          <Talk id="novak" />
          <Talk id="w9" />
          <Talk id="w10" />
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
          <td colspan="2" />
          <Talk id="panel-3" rowspan="2" />
          <td colspan="2" />
        </tr>
        <tr>
          <th class="leftth fourty">
            16:00
          </th>
          <Talk id="tetek" />
          <Talk id="kyrsch" />
          <Talk id="w11" />
          <Talk id="w12" />
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
          <Talk id="bures" />
          <Talk id="w13" />
          <Talk id="w14" />
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
