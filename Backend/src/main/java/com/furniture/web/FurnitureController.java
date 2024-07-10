package com.furniture.web;

import com.furniture.model.DTO.FurnitureDTO;
import com.furniture.model.Furniture;
import com.furniture.model.enumeration.Category;
import com.furniture.service.FurnitureService;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://192.168.0.107:3000/"})
@RequestMapping("/api/furniture")
public class FurnitureController {

    private final FurnitureService service;

    public FurnitureController(FurnitureService service) {
        this.service = service;
    }

    @GetMapping
    public List<Furniture> listAllFurnitures() {
      return this.service.listAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Furniture> addFurniture(@RequestBody FurnitureDTO furniture) {
        if (furniture == null){
            return ResponseEntity.notFound().build();
        }

        Furniture furniture1 = this.service.save(furniture.getName(),furniture.getDescription(),
                furniture.getPrice(), furniture.getQuantityInStock(),furniture.getImage(),furniture.getCategory(),furniture.getFurnitureColor());
        return ResponseEntity.ok(furniture1);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Furniture> deleteFurniture(@PathVariable Long id) {

        if (id == null) {
            return ResponseEntity.notFound().build();
        }

        Furniture furniture = this.service.delete(id);
        return ResponseEntity.ok(furniture);
    }

    @PostMapping("/filter")
    public List<Furniture> filter(@RequestParam(required = false) Long StartPrice, @RequestParam (required = false) Long EndPrice, @RequestParam (required = false) String name, @RequestParam (required = false) Category category) {

       List<Furniture> furnitures = this.service.filter(category,StartPrice,EndPrice,name);
       return furnitures;
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Furniture> edit(@PathVariable Long id, @RequestBody FurnitureDTO furniture) {
        if (furniture == null || id == null){
            return ResponseEntity.notFound().build();
        }

        Furniture furniture1 = this.service.update(id, furniture.getName(),furniture.getDescription(),
                furniture.getPrice(), furniture.getQuantityInStock(),furniture.getImage(),furniture.getCategory(), furniture.getFurnitureColor());

        return ResponseEntity.ok(furniture1);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Furniture> getFurniture(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.notFound().build();
        }

        Furniture furniture = this.service.findById(id);
        return ResponseEntity.ok(furniture);
    }






}
