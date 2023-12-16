import { Controller, Get, Post, Body, BadRequestException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private  usersService : UsersService) {}

    @Get()
    findAll(){
        return  this.usersService.findAll();
    }

    @Post()
    create(@Body() user: CreateUserDto){
        if(!user.email || !user.name) 
        throw new BadRequestException('Email e Nome precisam ser fornecidos');
    
    return this.usersService.create(user)
 }

    

}