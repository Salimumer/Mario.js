const {Client, Account, Database, ID, Queery } = Appwrite

const projectId= "65b6201e79e9c2ac1810"

const databseId = ''

const collectionId=''


const client = new Client()
.setEndpoint("https.//cloud.appwrite.io/v1")
.setProject(projectId)



const account = new Account(client)

function register (event){
    account.create(
        ID.unique(),
        event.target.elements['regsiter-email'].value,
        event.target.elements['register-password'].value,
        event.target.elements['resgistered -usernane'].value

    ).then(response => {
        console.log(response)

        // createe a document in databasee
    })

        account.createEmailSession

}



