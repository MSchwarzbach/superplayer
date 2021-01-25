import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { Router } from 'express'
import getSortOrder from '../utils/sort.js'
import imprimirPodcasts from '../utils/print.js'


dotenv.config()
const categoriaRouter = Router()


const email = process.env.MAIL
const url = `https://superplayer-test-xydgua7alq-ue.a.run.app`

const body = {
    "email": email
}

categoriaRouter.get('/categoria', async (req, res) => {

    try {
        const authJson = await fetch(`${url}/auth`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const authResponse = await authJson.json()

        const category = authResponse.categoria

        const podcastJson = await fetch(`${url}/podcasts/${category}`, { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": email
            }
        })
        
        const podcastResponse = await podcastJson.json()
        
        const alf = podcastResponse.data.sort(getSortOrder("nome"));
        console.log("Imprimir o título dos podcasts da categoria em ordem alfabética")
        imprimirPodcasts(alf)

        res.json(podcastResponse) 

    } catch (error){ 
        res.status(500).json({
            success: false,
            message: 'Ocorreu um erro',
            error,
        })
    }
})

export default categoriaRouter
