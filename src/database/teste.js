const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.220083",
        lng: "-49.6530311",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "85451518", 
        images: [

            "https://images.unsplash.com/photo-1573486145949-182147241fa6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/flagged/photo-1576042766640-62eacf463b9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visistas Das 8h até 18h",
        open_on_weekends: "0"
    })

    //Consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //Consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    //Deletar dado da tabela
    //await db.run("DELETE FROM orphanages WHERE id = '2'")
})