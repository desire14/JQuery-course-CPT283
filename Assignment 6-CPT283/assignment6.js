$(document).ready(function(){
    var $state = $("#state"),
    $errstate =  $("#errstate"),
    $zip = $("#zip"),
    $errzip =  $("#errzip"),
    $address1 = $("#address1"),
    $erraddress1 =  $("#erraddress1"),
    $address2 = $("#address2"),
    $erraddress2 =  $("#erraddress2"),
    $city = $("#city"),
    $errcity =  $("#city"),
    $phone = $("#phone"),
    $errphone =  $("#errphone"),
    $email = $("#email"),
    $erremail =  $("#erremail"),
    $number = $("#number"),
    $errnumber =  $("#errnumber"),
    $fname = $("#fname"),
    $errfname =  $("#errfname"),
    $lname = $("#lname"),
    $errlname =  $("#errlname"),
    $month = $("#month"),
    $year = $("#year"),
    $errdate = $("#errdate"),
    $cform = $("#custForm");

//hints
$state.focus(function()
{
    $errstate.append('Use a two letter abbreviation');

}).blur(function(){
    $errstate.empty();

});

$zip.focus(function(){
    $errzip.append('Use a 5 digit Zip Code');

}).blur(function(){
    $errzip.empty();

});

$phone.focus(function(){
    $errphone.append('Numbers Only – No Spaces or Dashes');

}).blur(function(){
    $errphone.empty();

});

$email.focus(function(){
    $erremail.append('Example – john@doe.com');

}).blur(function(){
    $erremail.empty();

});

$number.focus(function(){
    $errnumber.append('Numbers Only – No Spaces or Dashes');

}).blur(function(){
    $errnumber.empty();

});

//validation
$cform.submit(function(event){

    var pattern = /^[a-z]+$/i,
        addpatt = /^[a-z 0-9]+$/i,
        statepatt = /^[a-z]+$/i,
        numpatt = /^[0-9]+$/i,
        emailpatt = /^^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ /
        errors = 0,

        $(".error").empty();
        //name check

    if (($fname.val().length > 1) && ($fname.val().length < 21))
    {
        if(!pattern.test($fname.val()))
        {
            $errfname.append("Required: Must contain only letters and spaces between 2 and 20 characters");
            errors +=1;
        }
    }
    else {
        $errfname.append("- Required: Must contain only letters and spaces between 2 and 20 characters");
        errors +=1;
    }
    if (($lname.val().length > 1) && ($lname.val().length < 21))
    {
        if(!pattern.test($lname.val()))
        {
            $errlname.append("- Required: Must contain only letters and spaces between 2 and 20 characters");
            errors +=1;
        }
    }
    else {
        $errlname.append("- Required: Must contain only letters and spaces between 2 and 20 characters");
        errors +=1;
    }

    //city check
    if (($city.val().length > 1) && ($city.val().length < 21))
    {
        if(!pattern.test($city.val()))
        {
            $errcity.append("Required: Must contain only letters and spaces between 2 and 20 characters")
            errors +=1;
        }
    }
    else {
        $errcity.append("Required: Must contain only letters and spaces between 2 and 20 characters")
        errors +=1;
    }

    //Address check
    if (($address1.val().length > 1) && ($address1.val().length < 21))
    {
        if(!pattern.test($address1.val()))
        {
            $erraddress1.append("- Required: Must contain only letters and spaces between 2 and 20 characters")
            errors +=1;
        }
    }
    else {
        $erraddress2.append("- Required: Must contain only letters and spaces between 2 and 20 characters")
        errors +=1;
    }
    if (($address2.val().length > 1) && ($address2.val().length < 21))
    {
        if(!pattern.test($address2.val()))
        {
            $erraddress2.append("- Required: Must contain only letters and spaces between 2 and 20 characters")
            errors +=1;
        }
    }
    else {
        $erraddress2.append("Required: Must contain only letters and spaces between 2 and 20 characters")
        errors +=1;
    }

    if (($state.val().length != 2) || (!statepatt.test($state.val())))
    {
        $errstate.append("Required: Must contain only 2 State abbreviation!")
        errors +=1;
        
    }
    if (($zip.val().length != 5) || (!numberpatt.test($zip.val())))
    {
        $errzip.append("Required: Must contain only 5 digit zip code!")
        errors +=1;
        
    }
    
    if (($phone.val().length != 10) || (!numberpatt.test($phone.val())))
    {
        $errphone.append("Required: Must contain only 10 digit phone number!")
        errors +=1;
        
    }

    if (!emailpatt.test($email.val()))
    {
        $erremail.append("Required: Need valid email address.")
        errors +=1;
        
    }
    //card check

    if ($none.is(":checked")){

    }
    else{

        if (($number.val().length >= 13) && ($number.val().length <= 16))
        {
            if (!numberpatt.test($number.val()))
            {
                $errnumber.append("- Required: Must contain 13-16 digits")
                errors += 1;
            }
        }
        else {
            $errnumber.append("- Required: Must contain 13-16 digits")
            errors +=1; 
        }
    }

    if ($none.is(":checked")){

    }
    
    else{

        if (($month.val().length == " ") || ($year.val().length == " "))
        {
            $errdate.append("Select Month and year")
            errors +=1;
        }
        
    }

    if (errors > 0){
        $cform.prepend('<div class="error">Please edit the marked fields to fix errors. </div>');
		event.preventDefault();
    }
});


    
    

});
