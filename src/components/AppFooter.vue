<template>
    <div class="footer">
        <h1>{{ footer.title }}</h1>
        <div class="contactCardHolder">
            <ContactCard title="Get In Touch:" :ce="contactData.contactEntries"/>
            <ContactCard title="See What I Do:" :ce="contactData.otherLinks" />
        </div>
    </div>
</template>

<style scoped>
/* Mobile */
@media screen and (max-width: 700px) {
.contactCardHolder {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: flex-direction 0.25s;
    }
}

/* Desktop */
@media screen and (min-width: 701px) {
.contactCardHolder {
    display: flex;
    justify-content: center;
    flex-direction: row;
    transition:  0.25s;
    }
}

.footer {
    display: flex;
    flex-direction: column;
    background-color: #ff6a00;
}

h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-bottom: 50px;
    color: white;
}
</style>

<script setup>
import ContactCard from "./ContactCard.vue";
import intro from "./json/intro.json"
import footer from "./json/footer.json"
import { ref } from "vue";

const contactData = ref({
    contactEntries: [
        {
            0: {
                prefix: "mailto:",
                k1: atob(intro.hotdogs.chicago_style.ketchup.substring(0,8)),
                k2: atob(intro.hotdogs.chicago_style.ketchup.substring(8)),
                k3: atob(intro.hotdogs.chicago_style.top_relish),
                useSafetext: true
            },
            1: {
                prefix: "tel:",
                k1: atob(intro.hotdogs.boring_plain.mustard),
                k2: atob(intro.hotdogs.boring_plain.mayo),
                k3: atob(intro.hotdogs.boring_plain.nonflavor),
                useSafetext: true
            }
        }
    ],
    otherLinks: [
        intro.links
    ]
});
</script>