package com.furniture.service.implementation;

import com.furniture.model.DTO.FurnitureDTO;
import com.furniture.model.Furniture;
import com.furniture.model.enumeration.Category;
import com.furniture.model.exceptions.FurnitureNotFoundException;
import com.furniture.repository.FurnitureRepository;
import com.furniture.service.FurnitureService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FurnitureServiceImpl implements FurnitureService {

    private final FurnitureRepository furnitureRepository;

    public FurnitureServiceImpl(FurnitureRepository furnitureRepository) {
        this.furnitureRepository = furnitureRepository;
    }


    @Override
    public List<Furniture> listAll() {
        return this.furnitureRepository.findAll();
    }

    @Override
    public Furniture findById(Long id) {
        Furniture furniture = this.furnitureRepository.findById(id).orElseThrow(FurnitureNotFoundException::new);
        return furniture;
    }

    @Override
    public Furniture save(String name, String description,Long price, int quantityInStock,String image, Category category,String furnitureColor) {
        Furniture furniture = new Furniture(name, description, price, quantityInStock, image, category,furnitureColor);
        this.furnitureRepository.save(furniture);
        return furniture;
    }

    @Override
    public Furniture update(Long id, String name, String description,Long price, int quantityInStock,String image, Category category,String furnitureColor) {
        Furniture furniture = this.furnitureRepository.findById(id).orElseThrow(FurnitureNotFoundException::new);

        furniture.setName(name);
        furniture.setDescription(description);
        furniture.setPrice(price);
        furniture.setQuantityInStock(quantityInStock);
        furniture.setImage(image);
        furniture.setCategory(category);
        furniture.setFurnitureColor(furnitureColor);

        this.furnitureRepository.save(furniture);
        return furniture;
    }

    @Override
    public Furniture delete(Long id) {
        Furniture furniture = this.furnitureRepository.findById(id).orElseThrow(FurnitureNotFoundException::new);
        this.furnitureRepository.delete(furniture);
        return furniture;
    }


    @Override
    public List<Furniture> filter(Category category, Long startingPrice, Long endingPrice, String name) {
        if (name == null ) {
            return this.furnitureRepository.findFurnituresByCategoryAndPriceBetween(category,startingPrice,endingPrice);
        }
        else if (category == null && name == null || (startingPrice != null && endingPrice == null)) {
            return this.furnitureRepository.findFurnituresByPriceBetween(startingPrice, endingPrice);
        }
        if (category == null) {
            return this.furnitureRepository.findFurnituresByNameContainingAndPriceBetween(name,startingPrice,endingPrice);
        }
        return this.furnitureRepository.findFurnituresByCategoryAndPriceBetweenAndNameContaining(category, startingPrice, endingPrice, name);
    }
}
