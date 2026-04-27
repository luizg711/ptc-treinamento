import { Request, Response } from "express";
import prisma from "@database";
import Message from "src/global/Message";

export const createCalcado = async (req:Request, res:Response) => {
    try {
        const {nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque} = req.body;

        if (!nome_produto || !cor || !marca || !tamanho || !preco || !quantidade_em_estoque) {
            return res.status(404).json({
                message: "Preencha os dados obrigatórios" 
            })
        }

        const calcado = await prisma.calcado.create({
            data: {
                nome_produto,
                cor,
                marca,
                tamanho,
                preco,
                quantidade_em_estoque,
            }
        })

        return res.status(201).json({
            message: "Calçado registrado com sucesso!"
        })
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao cadastrar calçado.",
            error,
        })
        
    }
}
