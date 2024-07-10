package com.furniture.service;

import com.furniture.model.DTO.FurnitureDTO;
import com.furniture.model.Furniture;
import com.furniture.model.enumeration.Category;

import java.util.List;
import java.util.Optional;

public interface FurnitureService {


    List<Furniture> listAll();


    Furniture findById(Long id);
    Furniture save(String name, String description,Long price, int quantityInStock,String image, Category category,String furnitureColor);
    Furniture update(Long id,String name, String description,Long price, int quantityInStock,String image, Category category, String furnitureColor);
    Furniture delete(Long id);
    List<Furniture> filter(Category category, Long startingPrice, Long endingPrice, String name);

}
