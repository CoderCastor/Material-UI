import { Typography } from "@mui/material";

function TextTypography() {
  return (
    <>

    {/* after using component tag the value take the html tag as equal to the component but style
    remains same for eg here style is same as variant but html tag is h4*/}
    <Typography variant="h4" component="h2" gutterBottom>H4 Heading</Typography>
    {/* GutterBottom sets margin to the div */}


      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">SubTitle 1</Typography>
      <Typography variant="subtitle2">SubTitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        veritatis exercitationem iure numquam repellendus delectus voluptas
        maiores sint neque deserunt, ut omnis, ipsam placeat consequatur nisi
        maxime, in reiciendis a? Ratione illum officia numquam sint optio
        suscipit sunt nemo dolores sed commodi ullam, quam molestias fuga
        voluptate. Doloremque, ipsam reiciendis.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates distinctio rem! Quod sequi minima ipsum animi at, ut sit,
        pariatur quibusdam, ipsa autem maxime nesciunt qui aperiam sunt quia.
        Autem mollitia corporis voluptatum expedita hic totam atque ducimus quia
        molestiae et, animi eligendi qui laborum aut rerum ab harum!
      </Typography>
    </>
  );
}

export default TextTypography;
