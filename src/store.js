import { reactive } from 'vue';

export const store = reactive({
    cardList: [],
    cardArchetype: [],
    apiURLOptions: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    apiURL:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    selectOptions: "",
    apiNameOptions: "archetype",
    loading: false
})