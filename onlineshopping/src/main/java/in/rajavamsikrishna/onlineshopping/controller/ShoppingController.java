package in.rajavamsikrishna.onlineshopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import in.rajavamsikrishna.onlineshopping.entity.Item;
import in.rajavamsikrishna.onlineshopping.entity.ItemCategory;
import in.rajavamsikrishna.onlineshopping.repository.ItemCategoryRepository;
import in.rajavamsikrishna.onlineshopping.repository.ItemRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")

public class ShoppingController {
	@Autowired
	private ItemRepository itemrepository;
	@Autowired
	private ItemCategoryRepository itemcategoryrepository;
		@GetMapping("/items")
		public List<Item> getAllItems(){
			return itemrepository.findAll();
		}
		@GetMapping("/items/search/{id}")
		public ResponseEntity<List<Item>> getItems(@PathVariable long id){
		List<Item> items = itemrepository.findByCategoryId(id);
		
			return ResponseEntity.ok(items);
		}
		@GetMapping("/itemcategories")
		public List<ItemCategory> getAllItemCategories(){
			return itemcategoryrepository.findAll();
		}
		
		@GetMapping("/items/searchkey/{keyword}")
		public List<Item> getEmployee(@PathVariable String keyword){
		return itemrepository.findByKeyword(keyword);
		
		}
		@GetMapping("/items/{id}")
		public ResponseEntity<Item> getItem(@PathVariable long id){
		Item item =itemrepository.findById(id).orElseThrow();
		
			return ResponseEntity.ok(item);
		}
		@GetMapping("/category/{id}")
		public ResponseEntity<ItemCategory> getCategory(@PathVariable long id){
		Item item =itemrepository.findById(id).orElseThrow();
		long categoryid=item.category.id;
		ItemCategory itemcategory =itemcategoryrepository.findById(categoryid).orElseThrow();

			return ResponseEntity.ok(itemcategory);
		}
}

