print("\nBem vindo à locadora Positive Message")

opcao = 1

listaFilmes = []

while (opcao != 5):
    print("\n1)Listar filmes \n2)Cadastrar novo filme" +
          "\n3)Remover filme \n4)Pesquisar filme \n5)Sair\n")
    opcao = int(input("Digite uma opção: "))

    if (opcao == 1):
        print("-----Lista de filmes-----")
        for i in listaFilmes:
            print(i)

    elif (opcao == 2):
        novoFilme = input("Digite um novo filme: ")
        listaFilmes.append(novoFilme)
        print("\nFilme cadastrado com sucesso!")

    elif (opcao == 3):
        removerFilme = input("Digite o nome do filme que deseja remover: ")

        if (removerFilme in listaFilmes):
            listaFilmes.remove(removerFilme)
            print("\nFilme " + removerFilme + " removido com sucesso!")

        else:
            print("\nFilme não encontrado!")

    elif (opcao == 4):
        pesquisarFilme = input("Digite o nome do filme que deseja pesquisar: ")

        if (pesquisarFilme in listaFilmes):
            print("\nFilme " + pesquisarFilme + " disponível para locação")

        else:
            print("\nNão existe esse filme no nosso sistema")

    elif (opcao == 5):
        print("Obrigado por usar nossa locadora, volte sempre!")

    else:
        print("Opção inválida!")
