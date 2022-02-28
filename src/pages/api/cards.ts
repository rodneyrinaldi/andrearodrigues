import type { NextApiRequest, NextApiResponse } from 'next'
import records from "../../data/cards.json"

// type Data = {
//     nome: string,
//     titulo: string,
//     descricao: string,
//     descricaolonga: string,
//     bairro: string,
//     quartos: string,
//     garagem: string,
//     metragem: string,
//     andar: string,
//     entrega: string,
//     similar1: string,
//     similar2: string
// }

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ records })
}
