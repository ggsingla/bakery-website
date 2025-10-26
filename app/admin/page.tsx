'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/lib/types';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

// Get all available images from the products folder only
const getAllImages = (): string[] => {
  return [
    '/products/cakes/cake-1.webp',
    '/products/cakes/cake-2.webp',
    '/products/cakes/cake-3.webp',
    '/products/cakes/cake-4.webp',
    '/products/cakes/cake-5.webp',
    '/products/cakes/cake-6.webp',
    '/products/cakes/cake-7.webp',
    '/products/cakes/cake-8.webp',
    '/products/cakes/cake-9.webp',
    '/products/cakes/cake-10.webp',
    '/products/cakes/cake-11.webp',
    '/products/cakes/cake-12.webp',
    '/products/choco-balls/choco-balls-1.webp',
    '/products/choco-balls/choco-balls-1.1.webp',
    '/products/jar-cake/jar-cake-1.webp',
  ];
};

const categories = [
  { value: 'cakes', label: 'Cakes' },
  { value: 'biscuits', label: 'Biscuits' },
  { value: 'muffins', label: 'Muffins' },
  { value: 'chocolate-balls', label: 'Chocolate Balls' },
  { value: 'jar-cakes', label: 'Jar Cakes' },
  { value: 'other', label: 'Other' },
];

// Product Card Component
const ProductCard = ({ product, isSelected, onSelect }: {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}) => (
  <div
    className={`p-3 rounded-lg border cursor-pointer transition-colors ${isSelected
      ? 'border-blue-500 bg-blue-50'
      : 'border-gray-200 hover:border-gray-300'
      }`}
    onClick={onSelect}
  >
    <div className="flex items-center space-x-3">
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-md"
          sizes="48px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <span className="text-xs font-mono text-gray-500 bg-gray-100 px-1 rounded">
            #{product.id}
          </span>
          {product.featured && (
            <span className="text-xs bg-yellow-100 text-yellow-800 px-1 rounded">
              Featured
            </span>
          )}
        </div>
        <div className="font-medium text-sm truncate">{product.name}</div>
        <div className="text-xs text-gray-500">₹{product.price}</div>
      </div>
    </div>
  </div>
);

export default function AdminPage() {
  const [localProducts, setLocalProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [jsonOutput, setJsonOutput] = useState<string>('');
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
  const [isJsonDialogOpen, setIsJsonDialogOpen] = useState(false);
  const [ingredientInput, setIngredientInput] = useState('');
  const [flavorInput, setFlavorInput] = useState('');
  const { toast } = useToast();

  const availableImages = getAllImages();

  useEffect(() => {
    if (selectedProduct) {
      setEditedProduct({ ...selectedProduct });
    }
  }, [selectedProduct]);

  const handleProductSelect = (productId: string) => {
    const product = localProducts.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsEditing(true);
      setIsMobileSheetOpen(false); // Close mobile sheet after selection
    }
  };

  const handleFieldChange = (field: keyof Product, value: any) => {
    if (editedProduct) {
      const updatedProduct = {
        ...editedProduct,
        [field]: value,
      };

      // If main image is changed, ensure it's included in additional images
      if (field === 'image' && value) {
        const currentImages = updatedProduct.images || [];
        if (!currentImages.includes(value)) {
          updatedProduct.images = [value, ...currentImages];
        }
      }

      setEditedProduct(updatedProduct);
    }
  };

  const handleArrayFieldChange = (field: 'ingredients' | 'flavors', value: string) => {
    if (editedProduct) {
      const array = value.split(',').map(item => item.trim()).filter(item => item);
      setEditedProduct({
        ...editedProduct,
        [field]: array,
      });
    }
  };

  const handleAddItem = (field: 'ingredients' | 'flavors', value: string) => {
    if (editedProduct && value.trim()) {
      const currentArray = editedProduct[field] || [];
      setEditedProduct({
        ...editedProduct,
        [field]: [...currentArray, value.trim()],
      });
    }
  };

  const handleRemoveItem = (field: 'ingredients' | 'flavors', index: number) => {
    if (editedProduct) {
      const currentArray = editedProduct[field] || [];
      setEditedProduct({
        ...editedProduct,
        [field]: currentArray.filter((_, i) => i !== index),
      });
    }
  };

  const handleImagesChange = (selectedImages: string[]) => {
    if (editedProduct) {
      // Ensure main image is always included in additional images
      const mainImage = editedProduct.image;
      let finalImages = selectedImages;

      if (mainImage && !selectedImages.includes(mainImage)) {
        finalImages = [mainImage, ...selectedImages];
      }

      setEditedProduct({
        ...editedProduct,
        images: finalImages,
      });
    }
  };

  const handleSave = () => {
    if (editedProduct) {
      const updatedProducts = localProducts.map(p =>
        p.id === editedProduct.id ? editedProduct : p
      );

      // Check if this is a new product (not in original products array)
      const isNewProduct = !products.find(p => p.id === editedProduct.id);

      if (isNewProduct) {
        setLocalProducts([...updatedProducts, editedProduct]);
      } else {
        setLocalProducts(updatedProducts);
      }

      setSelectedProduct(editedProduct);

      toast({
        title: "Product Saved",
        description: "Product has been saved to local state. Changes are reflected in the product list.",
      });
    }
  };

  const handleGenerateJson = () => {
    const jsonString = JSON.stringify(localProducts, null, 2);
    setJsonOutput(jsonString);
    setIsJsonDialogOpen(true);
  };

  const handleReset = () => {
    if (selectedProduct) {
      setEditedProduct({ ...selectedProduct });
      setIngredientInput('');
      setFlavorInput('');
    }
  };

  const handleNewProduct = () => {
    const newId = (Math.max(...localProducts.map(p => parseInt(p.id)), 0) + 1).toString();
    const newProduct: Product = {
      id: newId,
      name: '',
      category: 'cakes',
      description: '',
      price: 0,
      image: '',
      images: [],
      ingredients: [],
      flavors: [],
      weight: '',
      featured: false,
    };
    setSelectedProduct(newProduct);
    setEditedProduct(newProduct);
    setIngredientInput('');
    setFlavorInput('');
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Product Management</h1>
              <p className="text-sm sm:text-base text-gray-600">Manage your bakery products and generate updated JSON</p>
            </div>
            <Dialog open={isJsonDialogOpen} onOpenChange={setIsJsonDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleGenerateJson} className="w-full sm:w-auto">
                  Generate JSON
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] w-[95vw]">
                <DialogHeader>
                  <DialogTitle>Generated Products JSON</DialogTitle>
                  <DialogDescription>
                    Copy the JSON below to update your products.ts file
                  </DialogDescription>
                </DialogHeader>
                <div className="relative">
                  <div className="bg-gray-100 rounded-lg p-4 max-h-[70vh] overflow-auto">
                    <pre className="text-xs whitespace-pre-wrap break-words font-mono">
                      {jsonOutput}
                    </pre>
                  </div>
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(jsonOutput);
                      toast({
                        title: "Copied!",
                        description: "JSON has been copied to clipboard.",
                      });
                    }}
                    className="absolute top-2 right-2 z-10"
                    size="sm"
                    variant="default"
                  >
                    Copy
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Product List - Desktop */}
          <div className="lg:col-span-1 hidden lg:block">
            <Card>
              <CardHeader>
                <CardTitle>Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <Button
                    onClick={handleNewProduct}
                    className="w-full text-sm sm:text-base"
                    variant="outline"
                  >
                    + Add New Product
                  </Button>
                </div>
                <div className="space-y-2 max-h-64 sm:max-h-96 overflow-y-auto">
                  {localProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isSelected={selectedProduct?.id === product.id}
                      onSelect={() => handleProductSelect(product.id)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Product Selection */}
          <div className="lg:hidden">
            <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full mb-4">
                  {selectedProduct ? `Selected: ${selectedProduct.name}` : 'Select Product'}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh]">
                <SheetHeader>
                  <SheetTitle>Select Product</SheetTitle>
                  <SheetDescription>
                    Choose a product to edit or create a new one
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  <Button
                    onClick={() => {
                      handleNewProduct();
                      setIsMobileSheetOpen(false);
                    }}
                    className="w-full"
                    variant="outline"
                  >
                    + Add New Product
                  </Button>
                  <div className="space-y-2 max-h-[60vh] overflow-y-auto">
                    {localProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        isSelected={selectedProduct?.id === product.id}
                        onSelect={() => handleProductSelect(product.id)}
                      />
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Product Editor */}
          <div className="lg:col-span-2">
            {isEditing && editedProduct ? (
              <Card>
                <CardHeader>
                  <CardTitle>Edit Product</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Main Image Display */}
                  {editedProduct.image && (
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-base sm:text-lg font-semibold">Main Image Preview</h3>
                      <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden border">
                        <Image
                          src={editedProduct.image}
                          alt={editedProduct.name || 'Product image'}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  )}
                  {/* Basic Information */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold">Basic Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="id">ID</Label>
                        <Input
                          id="id"
                          value={editedProduct.id}
                          onChange={(e) => handleFieldChange('id', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={editedProduct.name}
                          onChange={(e) => handleFieldChange('name', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={editedProduct.description}
                        onChange={(e) => handleFieldChange('description', e.target.value)}
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          type="number"
                          step="0.01"
                          value={editedProduct.price}
                          onChange={(e) => handleFieldChange('price', parseFloat(e.target.value) || 0)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight</Label>
                        <Input
                          id="weight"
                          value={editedProduct.weight || ''}
                          onChange={(e) => handleFieldChange('weight', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          value={editedProduct.category}
                          onValueChange={(value) => handleFieldChange('category', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.value} value={category.value}>
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={editedProduct.featured || false}
                        onChange={(e) => handleFieldChange('featured', e.target.checked)}
                      />
                      <Label htmlFor="featured">Featured Product</Label>
                    </div>
                  </div>

                  <Separator />

                  {/* Images */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold">Images</h3>

                    <div className="space-y-2">
                      <Label htmlFor="main-image">Main Image</Label>
                      <Select
                        value={editedProduct.image}
                        onValueChange={(value) => handleFieldChange('image', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select main image">
                            {editedProduct.image && (
                              <div className="flex items-center space-x-2">
                                <div className="relative w-6 h-6">
                                  <Image
                                    src={editedProduct.image}
                                    alt="Selected"
                                    fill
                                    className="object-cover rounded"
                                    sizes="24px"
                                  />
                                </div>
                                <span className="text-sm">{editedProduct.image}</span>
                              </div>
                            )}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {availableImages.map((image) => (
                            <SelectItem key={image} value={image}>
                              <div className="flex items-center space-x-3">
                                <div className="relative w-8 h-8">
                                  <Image
                                    src={image}
                                    alt={image}
                                    fill
                                    className="object-cover rounded"
                                    sizes="32px"
                                  />
                                </div>
                                <span className="text-sm">{image}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additional-images">Additional Images</Label>
                      <div className="space-y-2">
                        <div className="max-h-64 overflow-y-auto border rounded-md p-2 bg-gray-50">
                          {availableImages.map((image) => {
                            const isMainImage = image === editedProduct.image;
                            const isChecked = editedProduct.images?.includes(image) || false;

                            return (
                              <label
                                key={image}
                                className={`flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer ${isMainImage ? 'bg-blue-50 border border-blue-200' : ''
                                  }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  disabled={isMainImage}
                                  onChange={(e) => {
                                    const currentImages = editedProduct.images || [];
                                    if (e.target.checked) {
                                      handleImagesChange([...currentImages, image]);
                                    } else {
                                      handleImagesChange(currentImages.filter(img => img !== image));
                                    }
                                  }}
                                  className={`rounded ${isMainImage ? 'opacity-50' : ''}`}
                                />
                                <div className="relative w-8 h-8 flex-shrink-0">
                                  <Image
                                    src={image}
                                    alt={image}
                                    fill
                                    className="object-cover rounded"
                                    sizes="32px"
                                  />
                                  {isMainImage && (
                                    <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                      M
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm text-gray-700">{image}</span>
                                  {isMainImage && (
                                    <div className="text-xs text-blue-600 font-medium">Main Image</div>
                                  )}
                                </div>
                              </label>
                            );
                          })}
                        </div>
                        {editedProduct.images && editedProduct.images.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {editedProduct.images.map((image, index) => {
                              const isMainImage = image === editedProduct.image;
                              return (
                                <span
                                  key={index}
                                  className={`inline-flex items-center space-x-2 px-2 py-1 rounded-md text-xs ${isMainImage
                                    ? 'bg-green-100 text-green-800 border border-green-300'
                                    : 'bg-blue-100 text-blue-800'
                                    }`}
                                >
                                  <div className="relative w-4 h-4">
                                    <Image
                                      src={image}
                                      alt={image}
                                      fill
                                      className="object-cover rounded"
                                      sizes="16px"
                                    />
                                    {isMainImage && (
                                      <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
                                        M
                                      </div>
                                    )}
                                  </div>
                                  <span className="truncate max-w-20">{image.split('/').pop()}</span>
                                  {!isMainImage && (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const newImages = editedProduct.images?.filter((_, i) => i !== index) || [];
                                        handleImagesChange(newImages);
                                      }}
                                      className="text-blue-600 hover:text-blue-800 ml-1"
                                    >
                                      ×
                                    </button>
                                  )}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Ingredients and Flavors */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold">Ingredients & Flavors</h3>

                    {/* Ingredients */}
                    <div className="space-y-3">
                      <Label htmlFor="ingredients">Ingredients</Label>
                      <div className="space-y-2">
                        <div className="flex space-x-2">
                          <Input
                            id="ingredients"
                            value={ingredientInput}
                            onChange={(e) => setIngredientInput(e.target.value)}
                            placeholder="Add ingredient (e.g., Flour, Sugar, Eggs)"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddItem('ingredients', ingredientInput);
                                setIngredientInput('');
                              }
                            }}
                          />
                          <Button
                            type="button"
                            onClick={() => {
                              handleAddItem('ingredients', ingredientInput);
                              setIngredientInput('');
                            }}
                            disabled={!ingredientInput.trim()}
                            size="sm"
                          >
                            Add
                          </Button>
                        </div>
                        {editedProduct.ingredients && editedProduct.ingredients.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {editedProduct.ingredients.map((ingredient, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 border border-blue-200"
                              >
                                <span>{ingredient}</span>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveItem('ingredients', index)}
                                  className="text-blue-600 hover:text-blue-800 ml-1 font-bold"
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Flavors */}
                    <div className="space-y-3">
                      <Label htmlFor="flavors">Flavors</Label>
                      <div className="space-y-2">
                        <div className="flex space-x-2">
                          <Input
                            id="flavors"
                            value={flavorInput}
                            onChange={(e) => setFlavorInput(e.target.value)}
                            placeholder="Add flavor (e.g., Vanilla, Chocolate, Strawberry)"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddItem('flavors', flavorInput);
                                setFlavorInput('');
                              }
                            }}
                          />
                          <Button
                            type="button"
                            onClick={() => {
                              handleAddItem('flavors', flavorInput);
                              setFlavorInput('');
                            }}
                            disabled={!flavorInput.trim()}
                            size="sm"
                          >
                            Add
                          </Button>
                        </div>
                        {editedProduct.flavors && editedProduct.flavors.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {editedProduct.flavors.map((flavor, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 border border-green-200"
                              >
                                <span>{flavor}</span>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveItem('flavors', index)}
                                  className="text-green-600 hover:text-green-800 ml-1 font-bold"
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
                    <Button onClick={handleSave} className="flex-1 text-sm sm:text-base">
                      Save Product
                    </Button>
                    <Button onClick={handleReset} variant="outline" className="text-sm sm:text-base">
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-64 sm:h-96">
                  <div className="text-center px-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      Select a Product
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Choose a product from the list to edit, or create a new one.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
