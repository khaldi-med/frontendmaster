#include <stdio.h>
#include <string.h>
#include <unistd.h>

int	main(void)
{
	char	*hearder;

	hearder = "HTTP/1.1 200 OK";
	while (hearder[0] != '\0')
	{
		write(1, hearder, 1);
		hearder++;
	}
	return (0);
}
