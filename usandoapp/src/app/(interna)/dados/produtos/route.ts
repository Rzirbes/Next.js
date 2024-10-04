import { NextResponse} from 'next/server'

export async function GET(){
    return NextResponse.json([
        { id: 1, nome: 'PC Gamer', preco: 5489.0, data: new Date() },
        { id: 2, nome: 'iPad Pro', preco: 12578.0, data: new Date() },
        { id: 3, nome: 'Monitor 27', preco: 1200.0, data: new Date() },
        { id: 4, nome: 'Samsung S23', preco: 3599.0, data: new Date() },
        { id: 5, nome: 'Headset Gamer', preco: 599.0, data: new Date() },
        { id: 6, nome: 'Teclado Mecânico', preco: 599.0, data: new Date() },
        { id: 7, nome: 'Mouse Gamer', preco: 599.0, data: new Date() },
        { id: 8, nome: 'Gabinete Gamer', preco: 599.0, data: new Date() },
    ])
}