<template>
    <section id="productSelection" class="bg-white">
        <div class="flex flex-direction-row" style="padding: 2rem 0 2rem 0;     margin: 0 auto;
    max-width: 80rem;
    width: 100%;">
            <div style="position: relative">
                <img src="@/assets/oekotex_de.png" alt="Oeko-Tex Certificate" style="top: 10%;
    left: 9%;
    width: 27%; position: absolute;">
                <div>

                    <img src="@/assets/lillydoo-trial-kit-10.jpg" alt="Lillydoo Testpaket mit Windeln in Größe 1 und 15 Feuchttüchern">
                </div>
            </div>
            <div style="display: flex; flex-direction: column; flex-wrap: nowrap; text-align: left;">
                <h2 class="gap-bottom-1">Unser gratis Testpaket</h2>
                <p class="uppercase gap-bottom-1">Wähle deine Größe</p>
                <div class="gap-bottom-1" style="display: flex; flex-direction: row; flex-wrap: wrap; text-align: center;">
                    <div style="border: 1px solid #7c7c7c;
    text-align: center;
    padding: 7px 5px 2px 5px;
    color: #7c7c7c;
    margin-right: 10px;">
                       <p>1</p><span>(2-3 KG)</span>
                    </div>
                    <div style="border: 1px solid #7c7c7c;
    text-align: center;
    padding: 7px 5px 2px 5px;
    color: #7c7c7c;
    margin-right: 10px;">
                        <p>2</p><span>(3-4 KG)</span>
                    </div>
                    <div style="border: 1px solid #7c7c7c;
    text-align: center;
    padding: 7px 5px 2px 5px;
    color: #7c7c7c;
    margin-right: 10px;">
                        <p>3</p><span>(4-7 KG)</span>
                    </div>
                    <div style="border: 1px solid #7c7c7c;
    text-align: center;
    padding: 7px 5px 2px 5px;
    color: #7c7c7c;
    margin-right: 10px;">
                        <p>4</p><span>(7-10 KG)</span>
                    </div>
                    <div style="border: 1px solid #7c7c7c;
    text-align: center;
    padding: 7px 5px 2px 5px;
    color: #7c7c7c;
    margin-right: 10px;">
                        <p>5</p><span>(10-12 KG)</span>
                    </div>
                </div>
                <p>Teste jetzt unsere Windeln und Feuchttücher. Wir zahlen die Produkte, Du nur den Versand</p>
                <ul>
                    <li class="lillydoo-color">
                        Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 Euro pro Lieferung.
                    </li>
                    <li>
                        Preise inkl. MwSt., ggf. zzgl. <a class="lillydoo-color" href="https://www.lillydoo.com/de/zahlung-und-versand" target="_blank">Versandkosten</a>

                    </li>
                </ul>
                <button class="button">In den Warenkorb legen</button>
            </div>
        </div>

    </section>
</template>
<script>
export default {
    name: 'ProductSelection'
}
</script>