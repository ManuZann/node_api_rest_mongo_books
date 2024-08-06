// import express from "express";
// import bookModel from "../models/book.model";
const express = require("express")
const bookModel = require("../models/book.model")

const router = express.Router()

const getBook = async(req, res, next) =>{
    let book
    const { id } = req.params

    if(!id.match(/^[0-9a-fA-F]{24}$/)) 
        return res.status(404).json({message: "Id no valido"})

    try {
        book = await bookModel.findById(id)
        if(!book) return res.status(404).json({message: "Book not found"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    res.book = book
    next()
}

router.get("/", async (req, res) =>{
    console.log("GET");
    
    try {
        const books = await bookModel.find()
        console.log('Get All Books', books);
        
        if(books.length === 0) return res.status(204).json([])
        res.json(books)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post("/", async (req, res) =>{
    const {title, author, genre, publication_date} = req?.body
    if(!title || !author || !genre || !publication_date) 
        return res.status(400).json({message: "Faltan campos obligatorios"})

    const book = new bookModel({
        title,
        author,
        genre,
        publication_date
    })
    try {
        const newBook = await book.save()
        console.log("New Book", newBook);
        
        res.status(201).json(newBook)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get("/:id", getBook, async(req, res) =>{
    res.json(res.book)
})

router.put("/:id", getBook, async(req, res) =>{
    try {
        const book = res.book
        book.title = req.body.title || book.title
        book.author = req.body.author || book.author
        book.genre = req.body.genre || book.genre
        book.publication_date = req.body.publication_date || book.publication_date
        const updatedBook = await book.save()
        res.json(updatedBook)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.patch("/:id", getBook, async(req, res) =>{
    if(!req.body.title && !req.body.author && !req.body.genre && !req.body.publication_date)
        return res.status(400).json({message: "La solicitud debe tener alguno de los 4 parametros"})

    try {
        const book = res.book
        book.title = req.body.title || book.title
        book.author = req.body.author || book.author
        book.genre = req.body.genre || book.genre
        book.publication_date = req.body.publication_date || book.publication_date
        const updatedBook = await book.save()
        res.json(updatedBook)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.delete("/:id", getBook, async(req, res) =>{
    const book = res.book
    try {
        await book.deleteOne({_id: book._id})
        res.json(book)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})



module.exports = router