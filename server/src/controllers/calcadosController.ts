import { Request, Response } from "express";
import prisma from "@database";
import Message from "src/global/Message";
import { error } from "console";
import { parse } from "path";

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

export const readAllCalcados = async (req:Request, res:Response) => {
    try {
        const calcados = await prisma.calcado.findMany();

        if (!calcados){
            return res.status(404).json({
                message: "Nenhum calçado registrado."
            })
        }

        return res.status(200).json(calcados)
        
    } catch (error) {
        return res.status(400).json({
            message: "erro ao buscar calçados.",
            error,
        })
    }
}

export const updateCalcados = async (req:Request, res:Response) => {
    try{
        const { id } = req.params;
        const {nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque} = req.body;

        const calcadoId = parseInt(id, 10);

        const calcado = await prisma.calcado.update({
            data: {
                nome_produto,
                cor,
                marca,
                tamanho,
                preco,
                quantidade_em_estoque,
            },
            where: {
                id: calcadoId,
            }
        })

        return res.status(200).json({
            message: "Calçado atualizado com sucesso!"
        })
    }catch (error){
        return res.status(400).json({
            message: "Erro ao atualizar calçado.",
            error,
        })
    }
}