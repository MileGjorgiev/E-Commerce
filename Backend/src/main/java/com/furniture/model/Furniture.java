package com.furniture.model;

import com.furniture.model.enumeration.Category;
import jakarta.persistence.*;
import lombok.Data;

import java.awt.*;

@Entity
@Data
public class Furniture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private String furnitureColor;

    private Long price;

    private String image;

    private int quantityInStock;

    @Enumerated(EnumType.STRING)
    private Category category;


    public Furniture() {
    }

    public Furniture(String name, String description, Long price, int quantityInStock, String image, Category category,String furnitureColor) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantityInStock = quantityInStock;
        this.image = image;
        this.category = category;
        this.furnitureColor = furnitureColor;
    }
}
