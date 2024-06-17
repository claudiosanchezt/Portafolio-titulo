-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 01-06-2024 a las 21:02:34
-- Versión del servidor: 5.7.24
-- Versión de PHP: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recetas_del_mundo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrusel`
--

CREATE TABLE `carrusel` (
  `id_caru` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `url_imagen` varchar(300) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `estado` int(11) NOT NULL DEFAULT '0',
  `id_usr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carrusel`
--

INSERT INTO `carrusel` (`id_caru`, `nombre`, `url_imagen`, `fecha_creacion`, `estado`, `id_usr`) VALUES
(1, 'a', 'https://toparticulos.es/wp-content/uploads/2018/01/trucos-cocina-principiantes-823x480.jpg', '2023-07-12 00:00:00', 1, 2),
(2, 'b', 'https://frenchs.com.mx/webroot/files/slides/Banner_2.png', '2023-07-12 00:00:00', 1, 2),
(3, 'c', 'https://www.aldelis.com/wp-content/uploads/2018/12/blog_aldelis-2.jpg', '2023-07-12 00:00:00', 1, 2),
(4, 'd', 'https://www.cwp.com.mx/wp-content/uploads/2018/10/5-tips-para-que-tus-recetas-nunca-fallen-768x402.jpg', '2023-07-12 00:00:00', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_cat` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL,
  `Comentario` text,
  `id_usr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_cat`, `nombre`, `estado`, `fecha_creacion`, `Comentario`, `id_usr`) VALUES
(1, 'Breakfast', 1, '2023-06-27 11:19:33', NULL, 2),
(2, 'Beef', 1, '2023-06-27 11:20:20', NULL, 2),
(3, 'Chicken', 1, '2023-06-27 11:20:29', NULL, 2),
(4, 'Dessert', 1, '2023-06-27 11:20:44', NULL, 2),
(6, 'Goat', 1, '2023-06-27 11:21:03', NULL, 2),
(7, 'Lamb', 1, '2023-06-27 11:21:15', NULL, 2),
(8, 'Miscellaneous', 1, '2023-06-27 11:21:24', NULL, 2),
(9, 'Pasta', 1, '2023-06-27 11:21:37', NULL, 2),
(10, 'Pork', 1, '2023-06-27 11:21:52', NULL, 2),
(11, 'Seafood', 1, '2023-06-27 11:22:05', NULL, 2),
(12, 'Side', 1, '2023-06-27 11:22:15', NULL, 2),
(13, 'Starter', 1, '2023-06-27 11:40:32', NULL, 2),
(14, 'Vegan', 1, '2023-06-27 11:40:43', NULL, 2),
(15, 'Vegetarian', 1, '2023-06-27 11:40:50', NULL, 2),
(27, 'Chicken-cat', 1, '2024-05-26 20:36:30', NULL, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `id_pais` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `url_imagen` varchar(300) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL,
  `Comentario` int(11) DEFAULT NULL,
  `id_usr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`id_pais`, `nombre`, `url_imagen`, `estado`, `fecha_creacion`, `Comentario`, `id_usr`) VALUES
(1, 'American', 'https://www.themealdb.com/images/icons/flags/big/64/us.png', 1, '2023-06-26 23:58:57', NULL, 2),
(2, 'British', 'https://www.themealdb.com/images/icons/flags/big/64/gb.png', 1, '2023-06-27 10:00:19', NULL, 2),
(3, 'Canadian', 'https://www.themealdb.com/images/icons/flags/big/64/ca.png', 1, '2023-06-27 10:55:58', NULL, 2),
(4, 'Spanish', 'https://www.themealdb.com/images/icons/flags/big/64/es.png', 1, '2023-06-27 10:57:06', NULL, 2),
(5, 'Mexican', 'https://www.themealdb.com/images/icons/flags/big/64/mx.png', 1, '2023-06-27 10:57:47', NULL, 2),
(6, 'Argentinian', 'https://www.themealdb.com/images/icons/flags/big/64/ar.png', 1, '2023-06-27 10:59:34', NULL, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `receta`
--

CREATE TABLE `receta` (
  `id_receta` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `url_imagen` varchar(300) NOT NULL,
  `ingrediente` text NOT NULL,
  `preparacion` text NOT NULL,
  `estado` tinyint(4) NOT NULL,
  `id_cat` int(11) NOT NULL,
  `id_pais` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `id_usr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `receta`
--

INSERT INTO `receta` (`id_receta`, `nombre`, `url_imagen`, `ingrediente`, `preparacion`, `estado`, `id_cat`, `id_pais`, `fecha_creacion`, `id_usr`) VALUES
(1, 'Banana Pancakes', 'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg', ' 2 medium Eggs \n 2 medium Eggs \n pinch Baking Powder \n spinkling Vanilla Extract \n 1 tsp Oil \n 25g Pecan Nuts \n 125g Raspberries', 'In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla. Heat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil. Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate. Repeat the process with the remaining oil and batter. Top the pancakes with the pecans and raspberries.', 1, 4, 1, '2023-06-27', 2),
(2, 'Hot Chocolate Fudge', 'https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray. In a microwave-safe bowl, combine the dark chocolate chips, heavy cream and half of the sweetened condensed milk. Microwave the dark chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted. Add the vanilla extract to the dark chocolate mixture and stir well until smooth. Transfer the dark chocolate mixture into the prepared pan and spread into an even layer. In a separate bowl, combine the white chocolate chips with the remaining half of the sweetened condensed milk. Microwave the white chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted. Evenly spread the white chocolate mixture on top of dark chocolate layer. Top the chocolate layers with the Mallow Bits or miniature marshmallows, and gently press them down. Refrigerate for 4 hours, or until set. Remove the fudge and wax paper from the pan. Carefully peel all of the wax paper from the fudge. Cut the fudge into bite-sized pieces and serve.', 1, 4, 1, '2023-06-27', 2),
(3, 'Beef Brisket Pot Roast', 'https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', '1 Prepare the brisket for cooking: On one side of the brisket there should be a layer of fat, which you want. If there are any large chunks of fat, cut them off and discard them. Large pieces of fat will not be able to render out completely. Using a sharp knife, score the fat in parallel lines, about 3/4-inch apart. Slice through the fat, not the beef. Repeat in the opposite direction to make a cross-hatch pattern. Salt the brisket well and let it sit at room temperature for 30 minutes. 2 Sear the brisket: You\'ll need an oven-proof, thick-bottomed pot with a cover, or Dutch oven, that is just wide enough to hold the brisket roast with a little room for the onions. Pat the brisket dry and place it, fatty side down, into the pot and place it on medium high heat. Cook for 5-8 minutes, lightly sizzling, until the fat side is nicely browned. (If the roast seems to be cooking too fast, turn the heat down to medium. You want a steady sizzle, not a raging sear.) Turn the brisket over and cook for a few minutes more to brown the other side. 3 Sauté the onions and garlic: When the brisket has browned, remove it from the pot and set aside. There should be a couple tablespoons of fat rendered in the pot, if not, add some olive oil. Add the chopped onions and increase the heat to high. Sprinkle a little salt on the onions. Sauté, stirring often, until the onions are lightly browned, 5-8 minutes. Stir in the garlic and cook 1-2 more minutes. 4 Return brisket to pot, add herbs, stock, bring to simmer, cover, cook in oven: Preheat the oven to 300°F. Use kitchen twine to tie together the bay leaves, rosemary and thyme. Move the onions and garlic to the sides of the pot and nestle the brisket inside. Add the beef stock and the tied-up herbs. Bring the stock to a boil on the stovetop. Cover the pot, place the pot in the 300°F oven and cook for 3 hours. Carefully flip the brisket every hour so it cooks evenly. 5 Add carrots, continue to cook: After 3 hours, add the carrots. Cover the pot and cook for 1 hour more, or until the carrots are cooked through and the brisket is falling-apart tender. 6 Remove brisket to cutting board, tent with foil: When the brisket is falling-apart tender, take the pot out of the oven and remove the brisket to a cutting board. Cover it with foil. Pull out and discard the herbs. 7 Make sauce (optional): At this point you have two options. You can serve as is, or you can make a sauce with the drippings and some of the onions. If you serve as is, skip this step. To make a sauce, remove the carrots and half of the onions, set aside and cover them with foil. Pour the ingredients that are remaining into the pot into a blender, and purée until smooth. If you want, add 1 tablespoon of mustard to the mix. Put into a small pot and keep warm. 8 Slice the meat across the grain: Notice the lines of the muscle fibers of the roast. This is the grain of the meat. Slice the meat perpendicular to these lines, or across the grain (cutting this way further tenderizes the meat), in 1/4-inch to 1/2-inch slices. Serve with the onions, carrots and gravy. Serve with mashed, roasted or boiled potatoes, egg noodles or polenta.', 1, 2, 1, '2023-06-27', 2),
(4, 'Kentucky Fried Chicken', 'https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Preheat fryer to 350°F. Thoroughly mix together all the spice mix ingredients. Combine spice mix with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken. Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.', 1, 3, 1, '2023-06-27', 2),
(5, 'BBQ Pork Sloppy Joes', 'https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', '1 Preheat oven to 450 degrees. Wash and dry all produce. Cut sweet potatoes into ½-inch-thick wedges. Toss on a baking sheet with a drizzle of oil, salt, and pepper. Roast until browned and tender, 20-25 minutes. 2 Meanwhile, halve and peel onion. Slice as thinly as possible until you have ¼ cup (½ cup for 4 servings); finely chop remaining onion. Peel and finely chop garlic. Halve lime; squeeze juice into a small bowl. Halve buns. Add 1 TBSP butter (2 TBSP for 4) to a separate small microwave-safe bowl; microwave until melted, 30 seconds. Brush onto cut sides of buns. 3 To bowl with lime juice, add sliced onion, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. Stir to combine; set aside to quick-pickle. 4 Heat a drizzle of oil in a large pan over medium-high heat. Add chopped onion and season with salt and pepper. Cook, stirring, until softened, 4-5 minutes. Add garlic and cook until fragrant, 30 seconds more. Add pork and season with salt and pepper. Cook, breaking up meat into pieces, until browned and cooked through, 4-6 minutes. 5 While pork cooks, in a third small bowl, combine BBQ sauce, pickling liquid from onion, 3 TBSP ketchup (6 TBSP for 4 servings), ½ tsp sugar (1 tsp for 4), and ¼ cup water (⅓ cup for 4). Once pork is cooked through, add BBQ sauce mixture to pan. Cook, stirring, until sauce is thickened, 2-3 minutes. Taste and season with salt and pepper. 6 Meanwhile, toast buns in oven or toaster oven until golden, 3-5 minutes. Divide toasted buns between plates and fill with as much BBQ pork as you’d like. Top with pickled onion and hot sauce. Serve with sweet potato wedges on the side.', 1, 10, 1, '2023-06-27', 2),
(6, 'Big Mac', 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use. 2. To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each. Place each onto a square of baking paper and flatten to form into four x 15cm circles. Heat oil in a large frypan over high heat. In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through. Remove from heat and keep warm. Repeat with remaining two patties. 3. Carefully slice each burger bun into three acrossways, then lightly toast. 4. To assemble the burgers, spread a little Big Mac sauce over the bottom base. Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices. Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce. Top with burger lid to serve. 5. After waiting half an hour for your food to settle, go for a jog.', 1, 2, 1, '2023-06-27', 2),
(7, 'Roasted Eggplant With Tahini, Pine Nuts, and Lentils', 'https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', 'For the Lentils: Adjust oven rack to center position and preheat oven to 450°F to prepare for roasting eggplant. Meanwhile, heat 2 tablespoons olive oil in a medium saucepan over medium heat until shimmering. Add carrots, celery, and onion and cook, stirring, until softened but not browned, about 4 minutes. Add garlic and cook, stirring, until fragrant, about 30 seconds. Add lentils, bay leaves, stock or water, and a pinch of salt. Bring to a simmer, cover with the lid partially ajar, and cook until lentils are tender, about 30 minutes. (Top up with water if lentils are at any point not fully submerged.) Remove lid, stir in vinegar, and reduce until lentils are moist but not soupy. Season to taste with salt and pepper, cover, and keep warm until ready to serve. 2. For the Eggplant: While lentils cook, cut each eggplant in half. Score flesh with the tip of a paring knife in a cross-hatch pattern at 1-inch intervals. Transfer to a foil-lined rimmed baking sheet, cut side up, and brush each eggplant half with 1 tablespoon oil, letting each brushstroke be fully absorbed before brushing with more. Season with salt and pepper. Place a rosemary sprig on top of each one. Transfer to oven and roast until completely tender and well charred, 25 to 35 minutes. Remove from oven and discard rosemary. 3. To Serve: Heat 2 tablespoons olive oil and pine nuts in a medium skillet set over medium heat. Cook, tossing nuts frequently, until golden brown and aromatic, about 4 minutes. Transfer to a bowl to halt cooking. Stir half of parsley and rosemary into lentils and transfer to a serving platter. Arrange eggplant halves on top. Spread a few tablespoons of tahini sauce over each eggplant half and sprinkle with pine nuts. Sprinkle with remaining parsley and rosemary, drizzle with additional olive oil, and serve.', 1, 15, 1, '2023-06-27', 2),
(8, 'Apple Frangipan Tart', 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling. Cream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined. Peel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds. Bake for 20-25 minutes until golden-brown and set. Remove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin. Transfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.', 1, 4, 2, '2023-06-27', 2),
(9, 'Beef Wellington', 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', 'Put the mushrooms into a food processor with some seasoning and pulse to a rough paste. Scrape the paste into a pan and cook over a high heat for about 10 mins, tossing frequently, to cook out the moisture from the mushrooms. Spread out on a plate to cool. Heat in a frying pan and add a little olive oil. Season the beef and sear in the hot pan for 30 secs only on each side. (You don\'t want to cook it at this stage, just colour it). Remove the beef from the pan and leave to cool, then brush all over with the mustard. Lay a sheet of cling film on a work surface and arrange the Parma ham slices on it, in slightly overlapping rows. With a palette knife, spread the mushroom paste over the ham, then place the seared beef fillet in the middle. Keeping a tight hold of the cling film from the edge, neatly roll the Parma ham and mushrooms around the beef to form a tight barrel shape. Twist the ends of the cling film to secure. Chill for 15-20 mins to allow the beef to set and keep its shape. Roll out the puff pastry on a floured surface to a large rectangle, the thickness of a £1 coin. Remove the cling film from the beef, then lay in the centre. Brush the surrounding pastry with egg yolk. Fold the ends over, the wrap the pastry around the beef, cutting off any excess. Turn over, so the seam is underneath, and place on a baking sheet. Brush over all the pastry with egg and chill for about 15 mins to let the pastry rest. Heat the oven to 200C, 400F, gas 6. Lightly score the pastry at 1cm intervals and glaze again with beaten egg yolk. Bake for 20 minutes, then lower the oven setting to 180C, 350F, gas 4 and cook for another 15 mins. Allow to rest for 10-15 mins before slicing and serving with the side dishes of your choice. The beef should still be pink in the centre when you serve it.', 1, 2, 2, '2023-06-27', 2),
(10, 'Fish pie', 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', '01.Put the potatoes in a large pan of cold salted water and bring to the boil. Lower the heat, cover, then simmer gently for 15 minutes until tender. Drain, then return to the pan over a low heat for 30 seconds to drive off any excess water. Mash with 1 tbsp olive oil, then season. 02.Meanwhile put the milk in a large sauté pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes. Remove the fish (reserving the milk) and pat dry with kitchen paper, then gently flake into an ovenproof dish, discarding the skin and any bones. 03.Heat the remaining oil in a pan, stir in the flour and cook for 30 seconds. Gradually stir in 200-250ml of the reserved milk (discard the rest). Grate in nutmeg, season, then bubble until thick. Stir in the cream. 04.Preheat the oven to 190°C/fan170°C/gas 5. Grate the artichokes and add to the dish with the leek, prawns and herbs. Stir the lemon zest and juice into the sauce, then pour over. Mix gently with a wooden spoon. 05.Spoon the mash onto the fish mixture, then use a fork to make peaks, which will crisp and brown as it cooks. Sprinkle over the cheese, then bake for 35-40 minutes until golden and bubbling. Serve with wilted greens.', 1, 11, 2, '2023-06-27', 2),
(11, 'Creamy Tomato Soup', 'https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', 'Put the oil, onions, celery, carrots, potatoes and bay leaves in a big casserole dish, or two saucepans. Fry gently until the onions are softened – about 10-15 mins. Fill the kettle and boil it. Stir in the tomato purée, sugar, vinegar, chopped tomatoes and passata, then crumble in the stock cubes. Add 1 litre boiling water and bring to a simmer. Cover and simmer for 15 mins until the potato is tender, then remove the bay leaves. Purée with a stick blender (or ladle into a blender in batches) until very smooth. Season to taste and add a pinch more sugar if it needs it. The soup can now be cooled and chilled for up to 2 days, or frozen for up to 3 months. To serve, reheat the soup, stirring in the milk – try not to let it boil. Serve in small bowls with cheesy sausage rolls.', 1, 13, 2, '2023-06-27', 2),
(12, 'Turkey Meatloaf', 'https://www.themealdb.com/images/media/meals/ypuxtw1511297463.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Heat oven to 180C/160C fan/gas 4. Heat the oil in a large frying pan and cook the onion for 8-10 mins until softened. Add the garlic, Worcestershire sauce and 2 tsp tomato purée, and stir until combined. Set aside to cool. Put the turkey mince, egg, breadcrumbs and cooled onion mix in a large bowl and season well. Mix everything to combine, then shape into a rectangular loaf and place in a large roasting tin. Spread 2 tbsp barbecue sauce over the meatloaf and bake for 30 mins. Meanwhile, drain 1 can of beans only, then pour both cans into a large bowl. Add the remaining barbecue sauce and tomato purée. Season and set aside. When the meatloaf has had its initial cooking time, scatter the beans around the outside and bake for 15 mins more until the meatloaf is cooked through and the beans are piping hot. Scatter over the parsley and serve the meatloaf in slices.', 1, 8, 2, '2023-06-27', 2),
(13, 'Vegetarian Casserole', 'https://www.themealdb.com/images/media/meals/vptwyt1511450962.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', 'Heat the oil in a large, heavy-based pan. Add the onions and cook gently for 5 – 10 mins until softened. Add the garlic, spices, dried thyme, carrots, celery and peppers and cook for 5 minutes. Add the tomatoes, stock, courgettes and fresh thyme and cook for 20 - 25 minutes. Take out the thyme sprigs. Stir in the lentils and bring back to a simmer. Serve with wild and white basmati rice, mash or quinoa.', 1, 15, 2, '2023-06-27', 2),
(14, 'Strawberry Rhubarb Pie', 'https://www.themealdb.com/images/media/meals/178z5o1585514569.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Pie Crust: In a food processor, place the flour, salt, and sugar and process until combined. Add the butter and process until the mixture resembles coarse meal (about 15 seconds). Pour 1/4 cup (60 ml) water in a slow, steady stream, through the feed tube until the dough just holds together when pinched. If necessary, add more water. Do not process more than 30 seconds. Turn the dough onto your work surface and gather into a ball. Divide the dough in half, flattening each half into a disk, cover with plastic wrap, and refrigerate for about one hour before using. This will chill the butter and relax the gluten in the flour. After the dough has chilled sufficiently, remove one portion of the dough from the fridge and place it on a lightly floured surface. Roll the pastry into a 12 inch (30 cm) circle. (To prevent the pastry from sticking to the counter and to ensure uniform thickness, keep lifting up and turning the pastry a quarter turn as you roll (always roll from the center of the pastry outwards).) Fold the dough in half and gently transfer to a 9 inch (23 cm) pie pan. Brush off any excess flour and trim any overhanging pastry to an edge of 1/2 inch (1.5 cm). Refrigerate the pastry, covered with plastic wrap, while you make the filling. Remove the second round of pastry and roll it into a 13 inch (30 cm) circle. Using a pastry wheel or pizza cutter, cut the pastry into about 3/4 inch (2 cm) strips. Place the strips of pastry on a parchment paper-lined baking sheet, cover with plastic wrap, and place in the refrigerator for about 10 minutes. Make the Strawberry Rhubarb Filling: Place the cut strawberries and rhubarb in a large bowl. In a small bowl mix together the cornstarch, sugar, and ground cinnamon. Remove the chilled pie crust from the fridge. Sprinkle about 2 tablespoons of the sugar mixture over the bottom of the pastry crust. Add the remaining sugar mixture to the strawberries and rhubarb and gently toss to combine. Pour the fruit mixture into the prepared pie shell. Sprinkle the fruit with about 1 teaspoon of lemon juice and dot with 2 tablespoons of butter. Remove the lattice pastry from the refrigerator and, starting at the center with the longest strips and working outwards, place half the strips, spacing about 1 inch (2.5 cm) apart, on top of the filling. (Use the shortest pastry strips at the outer edges.) Then, gently fold back, about halfway, every other strip of pastry. Take another strip of pastry and place it perpendicular on top of the first strips of pastry. Unfold the bottom strips of pastry and then fold back the strips that weren\'t folded back the first time. Lay another strip of pastry perpendicular on top of the filling and then continue with the remaining strips. Trim the edges of the pastry strips, leaving a 1 inch (2.5 cm) overhang. Seal the edges of the pastry strips by folding them under the bottom pastry crust and flute the edges of the pastry. Brush the lattice pastry with milk and sprinkle with a little sugar. Cover and place in the refrigerator while you preheat the oven to 400 degrees F (205 degrees C) and place the oven rack in the lower third of the oven. Put a baking sheet, lined with aluminum foil, on the oven rack (to catch any spills.) Place the pie plate on the hot baking sheet and bake the pie for about 35 minutes and then, if the edges of the pie are browning too much, cover with a foil ring. Continue to bake the pie for about another 10 minutes or until the crust is a golden brown color and the fruit juices begin to bubble. Remove the pie from the oven and place on a wire rack to cool for several hours. Serve at room temperature with softly whipped cream or vanilla ice cream. Leftovers can be stored in the refrigerator for about 3 days. Reheat before serving. This pie can be frozen. Makes one 9 inch (23 cm) pie.', 1, 4, 2, '2023-06-27', 2),
(15, 'Split Pea Soup', 'https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', 'Put the gammon in a very large pan with 2 litres water and bring to the boil. Remove from the heat and drain off the water – this helps to get rid of some of the saltiness. Recover with 2 litres cold water and bring to the boil again. Put everything but the frozen peas into the pan and bring to the boil. Reduce to a simmer and cook for 1½-2½ hrs, topping up the water as and when you need to, to a similar level it started at. As the ham cooks and softens, you can halve it if you want, so it is all submerged under the liquid. When the ham is tender enough to pull into shreds, it is ready. Lift out the ham, peel off and discard the skin. While it is still hot (wear a clean pair of rubber gloves), shred the meat. Remove bay from the soup and stir in the frozen peas. Simmer for 1 min, then blend until smooth. Add a splash of water if too thick, and return to the pan to heat through if it has cooled, or if you are making ahead. When you are ready to serve, mix the hot soup with most of the ham – gently reheat if made ahead. Serve in bowls with the remaining ham scattered on top, and eat with crusty bread and butter.', 1, 12, 3, '2023-06-27', 2),
(16, 'Tourtiere', 'https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Heat oven to 200C/180C fan/gas 6. Boil the potato until tender, drain and mash, then leave to cool. Heat the oil in a non-stick pan, add the mince and onion and quickly fry until browned. Add the garlic, spices, stock, plenty of pepper and a little salt and mix well. Remove from the heat, stir into the potato and leave to cool. Roll out half the pastry and line the base of a 20-23cm pie plate or flan tin. Fill with the pork mixture and brush the edges of the pastry with water. Roll out the remaining dough and cover the pie. Press the edges of the pastry to seal, trimming off the excess. Prick the top of the pastry case to allow steam to escape and glaze the top with the beaten egg. Bake for 30 mins until the pastry is crisp and golden. Serve cut into wedges with a crisp green salad. Leftovers are good cold for lunch the next day, served with a selection of pickles.', 1, 10, 3, '2023-06-27', 2),
(17, 'Montreal Smoked Meat', 'https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', 'To make the cure, in a small bowl mix together salt, pink salt, black pepper, coriander, sugar, bay leaf, and cloves. Coat entire brisket with the cure and place in an extra-large resealable plastic bag. Place in the coldest part of the refrigerator and cure for 4 days, flipping brisket twice a day. Remove brisket from bag and wash as much cure off as possible under cold running water. Place brisket in a large container and fill with water and let soak for 2 hours, replacing water every 30 minutes. Remove from water and pat dry with paper towels. To make the rub, mix together black pepper, coriander, paprika, garlic powder, onion powder, dill weed, mustard, celery seed, and crushed red papper in a small bowl. Coat entire brisket with the rub. Fire up smoker or grill to 225 degrees, adding chunks of smoking wood chunks when at temperature. When wood is ignited and producing smoke, place brisket in, fat side up, and smoke until an instant read thermometer registers 165 degrees when inserted into thickest part of the brisket, about 6 hours. Transfer brisket to large roasting pan with V-rack. Place roasting pan over two burners on stovetop and fill with 1-inch of water. Bring water to a boil over high heat, reduce heat to medium, cover roasting pan with aluminum foil, and steam brisket until an instant read thermometer registers 180 degrees when inserted into thickest part of the meat, 1 to 2 hours, adding more hot water as needed. Transfer brisket to cutting board and let cool slightly. Slice and serve, preferably on rye with mustard.', 1, 2, 3, '2023-06-27', 2),
(19, 'Timbits', 'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Sift together dry ingredients. Mix together wet ingredients and incorporate into dry. Stir until smooth. Drop by teaspoonfuls(no bigger) into hot oil (365 degrees, no hotter), turning after a few moments until golden brown on all sides. Remove and drain. Roll in cinnamon sugar while still warm and serve.', 1, 4, 3, '2023-06-27', 2),
(20, 'Pate Chinois', 'https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', 'In a large pot of salted water, cook the potatoes until they are very tender. Drain. With a masher, coarsely crush the potatoes with at least 30 ml (2 tablespoons) of butter. With an electric mixer, purée with the milk. Season with salt and pepper. Set aside. With the rack in the middle position, preheat the oven to 190 °C (375 °F). In a large skillet, brown the onion in the remaining butter. Add the meat and cook until golden brown. Season with salt and pepper. Remove from the heat. Lightly press the meat at the bottom of a 20-cm (8-inch) square baking dish. Cover with the corn and the mashed potatoes. Sprinkle with paprika and parsley. Bake for about 30 minutes. Finish cooking under the broiler. Let cool for 10 minutes.', 1, 2, 3, '2023-06-27', 2),
(21, 'Sugar Pie', 'https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Preheat oven to 350 degrees F (175 degrees C). Grease a 9-inch pie dish. Place the brown sugar and butter in a mixing bowl, and beat them together with an electric mixer until creamy and very well combined, without lumps. Beat in eggs, one at a time, incorporating the first egg before adding the next one. Add the vanilla extract and salt; beat the flour in, a little at a time, and then the milk, making a creamy batter. Pour the batter into the prepared pie dish. Bake in the preheated oven for 35 minutes; remove pie, and cover the rim with aluminum foil to prevent burning. Return to oven, and bake until the middle sets and the top forms a crusty layer, about 15 more minutes. Let the pie cool to room temperature, then refrigerate for at least 1 hour before serving.', 1, 4, 3, '2023-06-27', 2),
(22, 'Breakfast Potatoes', 'https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', 'Before you do anything, freeze your bacon slices that way when you\'re ready to prep, it\'ll be so much easier to chop! Wash the potatoes and cut medium dice into square pieces. To prevent any browning, place the already cut potatoes in a bowl filled with water. In the meantime, heat 1-2 tablespoons of oil in a large skillet over medium-high heat. Tilt the skillet so the oil spreads evenly. Once the oil is hot, drain the potatoes and add to the skillet. Season with salt, pepper, and Old Bay as needed. Cook for 10 minutes, stirring the potatoes often, until brown. If needed, add a tablespoon more of oil. Chop up the bacon and add to the potatoes. The bacon will start to render and the fat will begin to further cook the potatoes. Toss it up a bit! The bacon will take 5-6 minutes to crisp. Once the bacon is cooked, reduce the heat to medium-low, add the minced garlic and toss. Season once more. Add dried or fresh parsley. Control heat as needed. Let the garlic cook until fragrant, about one minute. Just before serving, drizzle over the maple syrup and toss. Let that cook another minute, giving the potatoes a caramelized effect. Serve in a warm bowl with a sunny side up egg!', 1, 1, 3, '2023-06-27', 2),
(23, 'Seafood fideuà', 'https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Boil the kettle. Empty the mussels into a colander and run under cold water. Throw away any with broken shells. Pick through the shells, tapping each one on the side of the sink – they should be closed or should slowly close when tapped – if they stay open, throw them away. If any of the shells still have barnacles or stringy beards attached, pull them off with a cutlery knife and rinse the shells well. Keep in the colander, covered with a cold, damp cloth, until you’re ready to cook. Peel the prawn shells on the body section only – leave the heads and tails intact. Score down the backs and pull out any gritty entrails. Chill until you’re ready to cook. Put the saffron in a small cup, cover with 50ml kettle-hot water and set aside for 10 mins. If using vermicelli, put in a bowl and crush to little pieces (about 1cm long) with your hands. Heat the oil in a large frying pan with at least a 3cm lip, or a 40cm paella pan. Add the onion and stir around the pan for 5 mins until soft. Add the garlic and cook for 1 min more, then tip in the vermicelli and cook for 5 mins, stirring from time to time, until the vermicelli is toasted brown. Stir in the paprika. Keeping the heat moderate, stir through the monkfish, squid and saffron with its water, seasoning well. Spread the ingredients out in an even layer, then pour over the hot stock and scatter the tomatoes on top. Bring to a simmer, then cover the whole dish with a tight-fitting lid (or foil). Turn the heat to medium and cook for 6 mins. Uncover and stir to incorporate the dry top layer of pasta. Push the mussels into the pasta so the hinges are buried in the bottom of the dish, and they stand straight up. Arrange the prawns on top, cover tightly and cook for another 6 mins or until the mussels are open, the prawns are pink and the pasta is cooked through. Leave to simmer for another 2-3 mins to cook off most of the remaining liquid (leave a little in the pan to prevent the pasta from sticking together). Allow to sit for 2-3 mins, then squeeze over the lemon juice and arrange the wedges on top. Scatter with parsley before serving.', 1, 11, 4, '2023-06-27', 2),
(24, 'Spanish Tortilla', 'https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg', 'Dash Salt \\n Dash Salt \\n 3 Onion \\n 5 cloves Garlic \\n 1 Sprig Thyme \\n 1 sprig Rosemary \\n 4 Bay Leaves \\n 2 cups beef stock \\n 3 Large Carrots \\n 1 Tbsp Mustard \\n 4 Mashed Potatoes', 'Put a large non-stick frying pan on a low heat. Cook the onion slowly in the oil and butter until soft but not brown – this should take about 15 mins. Add the potatoes, cover the pan and cook for a further 15-20 mins, stirring occasionally to make sure they fry evenly. When the potatoes are soft and the onion is shiny, crush 2 garlic cloves and stir in, followed by the beaten eggs. Put the lid back on the pan and leave the tortilla to cook gently. After 20 mins, the edges and base should be golden, the top set but the middle still a little wobbly. To turn it over, slide it onto a plate and put another plate on top, turn the whole thing over and slide it back into the pan to finish cooking. Once cooked, transfer to a plate and serve the tortilla warm or cold, scattered with the chopped parsley. To accompany, take slices of warmed baguette, stab all over with a fork and rub with the remaining garlic, pile on grated tomatoes and season with sea salt and a drizzle of olive oil.', 1, 15, 4, '2023-06-27', 2),
(25, 'Roast fennel and aubergine paella', 'https://www.themealdb.com/images/media/meals/1520081754.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', '1 Put the fennel, aubergine, pepper and courgette in a roasting tray. Add a glug of olive oil, season with salt and pepper and toss around to coat the veggies in the oil. Roast in the oven for 20 minutes, turning a couple of times until the veg are pretty much cooked through and turning golden. 2 Meanwhile, heat a paella pan or large frying pan over a low– medium heat and add a glug of olive oil. Sauté the onion for 8–10 minutes until softened. Increase the heat to medium and stir in the rice, paprika and saffron. Cook for around 1 minute to start toasting the rice, then add the white wine. Reduce by about half before stirring in two-thirds of the stock. Reduce to a simmer and cook for 10 minutes without a lid, stirring a couple of times. 3 Stir in the peas, add some seasoning, then gently mix in the roasted veg. Pour over the remaining stock, arrange the lemon wedges on top and cover with a lid or some aluminium foil. Cook for a further 10 minutes. 4 To ensure you get the classic layer of toasted rice at the bottom of the pan, increase the heat to high until you hear a slight crackle. Remove from the heat and sit for 5 minutes before sprinkling over the parsley and serving.', 1, 14, 4, '2023-06-27', 2),
(26, 'Chicken Enchilada Casserole', 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot. Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes. No water is needed, the chicken will cook in the Enchilada sauce. Make sure you stir occasionally so that it doesn\'t stick to the bottom. Remove chicken from the pot and shred with two forks. Preheat oven to 375 F degrees. Start layering the casserole. Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish. I used a longer baking dish, so that I can put 2 corn tortillas across. Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce. Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese. Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese. Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top. Serve warm.', 1, 3, 5, '2023-06-27', 2),
(27, 'Cajun spiced fish tacos', 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Cooking in a cajun spice and cayenne pepper marinade makes this fish super succulent and flavoursome. Top with a zesty dressing and serve in a tortilla for a quick, fuss-free main that\'s delightfully summery. On a large plate, mix the cajun spice and cayenne pepper with a little seasoning and use to coat the fish all over. Heat a little oil in a frying pan, add in the fish and cook over a medium heat until golden. Reduce the heat and continue frying until the fish is cooked through, about 10 minutes. Cook in batches if you don’t have enough room in the pan. Meanwhile, prepare the dressing by combining all the ingredients with a little seasoning. Soften the tortillas by heating in the microwave for 5-10 seconds. Pile high with the avocado, lettuce and spring onion, add a spoonful of salsa, top with large flakes of fish and drizzle over the dressing.', 1, 11, 5, '2023-06-27', 2),
(28, 'Braised Beef Chilli', 'https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Preheat the oven to 120C/225F/gas mark 1. Take the meat out of the fridge to de-chill. Pulse the onions and garlic in a food processor until finely chopped. Heat 2 tbsp olive oil in a large casserole and sear the meat on all sides until golden. Set to one side and add another small slug of oil to brown the chorizo. Remove and add the onion and garlic, spices, herbs and chillies then cook until soft in the chorizo oil. Season with salt and pepper and add the vinegar, tomatoes, ketchup and sugar. Put all the meat back into the pot with 400ml water (or red wine if you prefer), bring up to a simmer and cook, covered, in the low oven. After 2 hours, check the meat and add the beans. Cook for a further hour and just before serving, pull the meat apart with a pair of forks.', 1, 2, 5, '2023-06-27', 2),
(29, 'Crock Pot Chicken Baked Tacos', 'https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Put the uncooked chicken breasts in the crock pot. Pour the full bottle of salad dressing over the chicken. Sprinkle the rest of the ingredients over the top and mix them in a bit with a spoon. Cover your crock pot with the lid and cook on high for 4 hours. Remove all the chicken breasts from the crock pot and let cool. Shred the chicken breasts and move to a glass bowl. Pour most of the liquid over the shredded chicken. FOR THE TACOS: Make the guacamole sauce by mixing the avocado and green salsa together. Pour the guacamole mixture through a strainer until smooth and transfer to a squeeze bottle. Cut the tip off the lid of the squeeze bottle to make the opening more wide if needed. Make the sour cream sauce by mixing the sour cream and milk together until you get a more liquid sour cream sauce. Transfer to a squeeze bottle. In a 9x 13 glass baking dish, fill all 12+ tacos with a layer of refried beans, cooked chicken and shredded cheese. Bake at 450 for 10-15 minutes just until the cheese is melted and bubbling. Out of the oven top all the tacos with the sliced grape tomaotes, jalapeno and cilantro. Finish with a drizzle of guacamole and sour cream. Enjoy!', 1, 3, 5, '2023-06-27', 2),
(30, 'Chickpea Fajitas', 'https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Heat oven to 200C/180C fan/gas 6 and line a baking tray with foil. Drain the chickpeas, pat dry and tip onto the prepared baking tray. Add the oil and paprika, toss to coat, then roast for 20-25 mins until browned and crisp, shaking halfway through cooking. Meanwhile, put the tomatoes and onion in a small bowl with the vinegar and set aside to pickle. Put the avocado in another bowl and mash with a fork, leaving some larger chunks. Stir in the lime juice and season well. Mix the soured cream with the harissa and set aside until ready to serve. Heat a griddle pan until nearly smoking. Add the tortillas , one at a time, charring each side until hot with griddle lines. Put everything on the table and build the fajitas : spread a little of the harissa cream over the tortilla, top with roasted chickpeas, guacamole, pickled salsa and coriander, if you like. Serve with the lime wedges for squeezing over.', 1, 15, 5, '2023-06-27', 2),
(31, 'Stuffed Bell Peppers with Quinoa and Black Beans', 'https://www.themealdb.com/images/media/meals/b66myb1683207208.jpg', ' 2 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', '1. Preheat your oven to 375°F (190°C). Lightly grease a 9x13-inch baking dish or a similar-sized casserole dish. 2. Place the bell pepper halves in the prepared baking dish, cut side up. Bake for 15-20 minutes, or until slightly softened. 3. While the bell peppers are baking, prepare the filling. In a large skillet, heat the olive oil over medium heat. Add the chopped onion, and cook for 3-4 minutes, until softened. Add the garlic, and cook for another 1 minute, until fragrant. 4. Stir in the cooked quinoa, black beans, corn, diced tomatoes, ground cumin, chili powder, smoked paprika, salt, and pepper. Cook for 5-7 minutes, until heated through. Remove the skillet from heat, and stir in 1 cup of the shredded cheese, if using. 5. Remove the bell peppers from the oven, and carefully stuff each pepper half with the quinoa and black bean mixture. Top the stuffed peppers with the remaining 1/2 cup of shredded cheese, if using. 6. Return the stuffed peppers to the oven, and bake for another 15-20 minutes, until the cheese is melted and the peppers are tender. 7. Remove from the oven, and allow the stuffed peppers to cool for 5 minutes before serving. Garnish with fresh chopped cilantro.', 1, 15, 5, '2023-06-27', 2),
(32, 'Chocolate Caliente Chileno', 'https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg', ' 3 tbs Heavy Cream \n 2 tbs Heavy Cream \n 1 – 14-ounce can Condensed Milk \n 1 tsp Vanilla Extract \n 1-⅓ cups White Chocolate Chips \n 1-½ cups Miniature Marshmallows', 'Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray. In a microwave-safe bowl, combine the dark chocolate chips, heavy cream and half of the sweetened condensed milk. Microwave the dark chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted. Add the vanilla extract to the dark chocolate mixture and stir well until smooth. Transfer the dark chocolate mixture into the prepared pan and spread into an even layer. In a separate bowl, combine the white chocolate chips with the remaining half of the sweetened condensed milk. Microwave the white chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted. Evenly spread the white chocolate mixture on top of dark chocolate layer. Top the chocolate layers with the Mallow Bits or miniature marshmallows, and gently press them down. Refrigerate for 4 hours, or until set. Remove the fudge and wax paper from the pan. Carefully peel all of the wax paper from the fudge. Cut the fudge into bite-sized pieces and serve.', 1, 4, 1, '2023-11-05', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usr` int(11) NOT NULL,
  `nombre` varchar(64) DEFAULT NULL,
  `apellido` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `correo` varchar(16) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usr`, `nombre`, `apellido`, `correo`, `password`, `activo`, `fecha_creacion`) VALUES
(1, 'Pedrito', 'Salas', 'psalas@duocuc.cl', 'pass3212', 1, '2024-05-26 17:15:11'),
(2, 'Claudio', 'Sanchez', 'cla.sanchezt@duo', 'cast1301', 1, '2024-05-26 17:15:11');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrusel`
--
ALTER TABLE `carrusel`
  ADD PRIMARY KEY (`id_caru`),
  ADD KEY `FK1_idusuario_carrusel` (`id_usr`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_cat`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id_pais`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `receta`
--
ALTER TABLE `receta`
  ADD PRIMARY KEY (`id_receta`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `FK1_categorias` (`id_cat`),
  ADD KEY `FK2_pais` (`id_pais`),
  ADD KEY `FK3_receta` (`id_usr`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usr`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrusel`
--
ALTER TABLE `carrusel`
  MODIFY `id_caru` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_cat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id_pais` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `receta`
--
ALTER TABLE `receta`
  MODIFY `id_receta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrusel`
--
ALTER TABLE `carrusel`
  ADD CONSTRAINT `FK1_idusuario_carrusel` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_usr`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `receta`
--
ALTER TABLE `receta`
  ADD CONSTRAINT `FK1_categorias` FOREIGN KEY (`id_cat`) REFERENCES `categoria` (`id_cat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK2_pais` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK3_receta` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_usr`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
